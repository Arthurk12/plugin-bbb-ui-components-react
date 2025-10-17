import * as React from 'react';
import { BBBTextAreaInput } from '@mconf/bbb-ui-components-react';

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const rowsOptions: (number | undefined)[] = [undefined, 2, 6] as const;
const maxLengthOptions: (number | undefined)[] = [undefined, 50, 200] as const;
const placeholders = ['Type your message...', 'Enter details here', ''] as const;
const autoFocusOptions = [true, false] as const;

type Combo = {
  rows: typeof rowsOptions[number];
  maxLength: typeof maxLengthOptions[number];
  placeholder: typeof placeholders[number];
  autoFocus: typeof autoFocusOptions[number];
};

function getCombinations(): Combo[] {
  return rowsOptions.flatMap((rows) => (
    maxLengthOptions.flatMap((maxLength) => (
      placeholders.flatMap((placeholder) => (
        autoFocusOptions.flatMap((autoFocus) => ({
          rows,
          maxLength,
          placeholder,
          autoFocus,
        }))
      ))
    ))
  ));
}

export function BBBTextAreaInputCombinations() {
  const combos = getCombinations();

  return (
    <div style={gridStyle}>
      {combos.map((values) => {
        const {
          rows,
          maxLength,
          placeholder,
          autoFocus,
        } = values;

        const key = [
          rows ? `rows${rows}` : 'norows',
          maxLength ? `max${maxLength}` : 'nomax',
          placeholder ? 'ph' : 'noph',
          autoFocus ? 'af' : 'noaf',
        ].join('-');

        return (
          (
            <BBBTextAreaInput
              key={key}
              rows={rows}
              maxLength={maxLength}
              placeholder={placeholder}
              autoFocus={autoFocus}
            />
          )
        );
      })}
    </div>
  );
}

export default BBBTextAreaInputCombinations;

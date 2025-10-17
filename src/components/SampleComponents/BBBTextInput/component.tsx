import * as React from 'react';
import { BBBTextInput } from '@mconf/bbb-ui-components-react';

const textInputListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const labels = ['Text Input label', ''] as const;
const helperTexts = ['Text Input auxiliary description', ''] as const;
const errorOptions = [false, true] as const;
const types = ['text', 'password'] as const;

type Combo = {
  label: typeof labels[number];
  helperText: typeof helperTexts[number];
  error: typeof errorOptions[number];
  type: typeof types[number];
};

function getCombinations(): Combo[] {
  return labels.flatMap((label) => (
    helperTexts.flatMap((helperText) => (
      errorOptions.flatMap((error) => (
        types.flatMap((type) => ({
          label,
          helperText,
          error,
          type,
        }))
      ))
    ))
  ));
}

export function BBBTextInputCombinations() {
  const combos = getCombinations();

  return (
    <div style={textInputListStyle}>
      {combos.map((values) => {
        const {
          label,
          helperText,
          error,
          type,
        } = values;

        let errorKey: string;
        if (error === true) {
          errorKey = 'error';
        } else if (error === false) {
          errorKey = 'noerror';
        } else {
          errorKey = 'undeferror';
        }

        const key = [
          label || 'nolabel',
          helperText || 'nohelper',
          errorKey,
          type || 'notype',
        ].join('-');

        return (
          (
            <BBBTextInput
              key={key}
              label={label}
              helperText={helperText}
              error={error}
              type={type}
            />
          )
        );
      })}
    </div>
  );
}

export default BBBTextInputCombinations;

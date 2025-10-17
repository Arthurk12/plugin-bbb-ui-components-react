import * as React from 'react';
import { BBBCheckbox } from '@mconf/bbb-ui-components-react';

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const layouts = ['right', 'left'] as const;
const bools = [false, true];

type Combo = {
  layout: typeof layouts[number];
  round: boolean;
  indeterminate: boolean;
  disabled: boolean;
};

function getCombinations(): Combo[] {
  return bools.flatMap((round) => (
    layouts.flatMap((layout) => (
      bools.flatMap((indeterminate) => (
        bools.flatMap((disabled) => ({
          layout,
          round,
          indeterminate,
          disabled,
        }))))))));
}

export function BBBCheckboxCombinations() {
  return (
    <div style={gridStyle}>
      {getCombinations().map((values) => {
        const {
          layout,
          round,
          indeterminate,
          disabled,
        } = values;

        const key = [
          layout,
          round ? 'round' : 'square',
          indeterminate ? 'indeterminate' : 'determinate',
          disabled ? 'disabled' : 'enabled',
        ].join('-');

        return (
          <BBBCheckbox
            key={key}
            label={
              [
                layout,
                round ? 'round' : '',
                indeterminate ? 'indeterminate' : '',
                disabled ? 'disabled' : '',
              ].filter(Boolean).join(' ')
            }
            layout={layout}
            round={round}
            indeterminate={indeterminate}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
}

export default BBBCheckboxCombinations;

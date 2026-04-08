import * as React from 'react';
import { BBBToggle } from '@mconf/bbb-ui-components-react';

const toggleListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

interface Labels extends ReadonlyArray<string | undefined> {}
const labels: Labels = ['Enable feature', 'Receive updates'] as const;
interface HelperTexts extends ReadonlyArray<string | undefined> {}
const helperTexts: HelperTexts = [undefined, 'This is a helper text'] as const;
const textPositions = ['right', 'left', 'top', 'bottom'] as const;

type Combo = {
  label: typeof labels[number];
  helperText: typeof helperTexts[number];
  textPosition: typeof textPositions[number];
};

function getCombinations(): Combo[] {
  const combinations: Combo[] = [];

  labels.forEach((label: typeof labels[number]) => {
    helperTexts.forEach((helperText: typeof helperTexts[number]) => {
      textPositions.forEach((textPosition: typeof textPositions[number]) => {
        combinations.push({
          label,
          helperText,
          textPosition,
        });
      });
    });
  });

  return combinations;
}

export function BBBToggleCombinations() {
  const combos = getCombinations();

  return (
    <div style={toggleListStyle}>
      {combos.map((values) => {
        const {
          label,
          helperText,
          textPosition,
        } = values;

        const key = [
          label || 'nolabel',
          helperText || 'nohelper',
          textPosition,
        ].join('-');

        return (
          (
            <BBBToggle
              key={key}
              label={label}
              helperText={helperText}
              textPosition={textPosition}
            />
          )
        );
      })}
    </div>
  );
}

export default BBBToggleCombinations;

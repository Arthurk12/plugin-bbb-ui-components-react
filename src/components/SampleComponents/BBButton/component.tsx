import * as React from 'react';
import { BBButton } from '@mconf/bbb-ui-components-react';
import { MdFavorite, MdSend } from 'react-icons/md';

const colors = ['default', 'danger', 'neutral'] as const;
const variants = ['primary', 'secondary', 'tertiary', 'subtle'] as const;
const layouts = ['default', 'stacked', 'circle'] as const;
const tooltipPlacements = ['top', 'bottom', 'left', 'right'] as const;

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  padding: '24px',
};

type Combo = {
  color: typeof colors[number];
  variant: typeof variants[number];
  layout: typeof layouts[number];
  tooltipPlacement: typeof tooltipPlacements[number];
};

function getCombinations(): Combo[] {
  const combos: Combo[] = [];
  layouts.forEach((layout) => {
    colors.forEach((color) => {
      variants.forEach((variant) => {
        tooltipPlacements.forEach((tooltipPlacement) => {
          combos.push({
            color,
            variant,
            layout,
            tooltipPlacement,
          });
        });
      });
    });
  });
  return combos;
}

export function BBButtonCombinations() {
  return (
    <div style={gridStyle}>
      {getCombinations().map(({
        color,
        variant,
        layout,
        tooltipPlacement,
      }) => {
        const label = `${variant} / ${color} / ${layout} / ${tooltipPlacement}`;
        const commonProps = {
          key: label,
          color,
          variant,
          layout,
          label,
          tooltipLabel: label,
          tooltipPlacement,
          onClick: () => {
            // eslint-disable-next-line no-console
            console.log(`Clicked ${variant} button with ${color} color, ${layout} layout, ${tooltipPlacement} tooltip`);
          },
        };
        if (layout === 'stacked' || layout === 'circle') {
          return (
            <BBButton
              {...commonProps}
              icon={<MdFavorite />}
            />
          );
        }
        // layout === 'default'
        return (
          <BBButton
            {...commonProps}
            iconStart={<MdFavorite />}
            iconEnd={<MdSend />}
          />
        );
      })}
    </div>
  );
}

export default BBButtonCombinations;

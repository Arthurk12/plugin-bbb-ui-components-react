import React, { ReactNode } from 'react';
import { BBBNavigation } from '@mconf/bbb-ui-components-react';
import { MdHome, MdSettings } from 'react-icons/md';

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const labels = ['Home', 'Settings'] as const;
const icons: ReactNode[] = [<MdHome />, <MdSettings />, null] as const;
const children = [<span>element appended to header</span>, null];

type Combo = {
  label: typeof labels[number];
  icon: typeof icons[number];
  child: typeof children[number];
};

function getCombinations(): Combo[] {
  return labels.flatMap((label) => (
    icons.flatMap((icon) => (
      children.flatMap((child) => ({
        label,
        icon,
        child,
      }))
    ))
  ));
}

export function BBBNavigationCombinations() {
  const combos = getCombinations();

  return (
    <div style={gridStyle}>
      {combos.map((values) => {
        const {
          label,
          icon,
          child,
        } = values;
        const iconName = React.isValidElement(icon)
          ? (icon.type as React.ComponentType<unknown>).displayName
            || (icon.type as React.ComponentType<unknown>).name
          : undefined;

        const key = [
          label,
          iconName,
          child ? 'children' : 'nochildren',
        ].join('-');

        return (
          (
            <BBBNavigation
              key={key}
              label={label}
              icon={icon}
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log(`Clicked on BBB navigation ${label}`);
              }}
            >
              {child}
            </BBBNavigation>
          )
        );
      })}
    </div>
  );
}

export default BBBNavigationCombinations;

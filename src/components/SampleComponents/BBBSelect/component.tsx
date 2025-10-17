import * as React from 'react';
import { BBBSelect } from '@mconf/bbb-ui-components-react';
import { MdExpandMore, MdArrowDropDownCircle } from 'react-icons/md';
import { MenuItem } from '@mui/material';

const selectListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const titles = ['Select Title', ''] as const;
const icons: React.ReactNode[] = [<MdExpandMore size="1.5rem" />, <MdArrowDropDownCircle size="1.5rem" />, null] as const;

const MenuItemsList = [
  [
    <MenuItem key="a" value="a">Option A</MenuItem>,
    <MenuItem key="b" value="b">Option B</MenuItem>,
  ],
  [
    <MenuItem key="x" value="x">Option X</MenuItem>,
    <MenuItem key="y" value="y">Option Y</MenuItem>,
    <MenuItem key="z" value="z">Option Z</MenuItem>,
  ],
] as const;

type Combo = {
  title: typeof titles[number];
  icon: typeof icons[number];
  children: typeof MenuItemsList[number];
};

function getCombinations(): Combo[] {
  return titles.flatMap((title) => (
    icons.flatMap((icon) => (
      MenuItemsList.map((children) => ({
        title,
        icon,
        children,
      }))
    ))
  ));
}

export function BBBSelectCombinations() {
  const combos = getCombinations();

  return (
    <div style={selectListStyle}>
      {combos.map((values) => {
        const {
          title,
          icon,
          children,
        } = values;

        const key = [
          title ? 'title' : 'notitle',
          icon ? 'icon' : 'noicon',
          children.length,
        ].join('-');

        return (
          (
            <BBBSelect
              key={key}
              title={title}
              icon={icon}
            >
              {children}
            </BBBSelect>
          )
        );
      })}
    </div>
  );
}

export default BBBSelectCombinations;

import * as React from 'react';
import { BBBHint } from '@mconf/bbb-ui-components-react';
import {
  MdInfo,
  MdWarning,
  MdError,
  MdCheckCircle,
} from 'react-icons/md';

const hintListStyle: React.CSSProperties = {
  display: 'grid',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const icons: React.ReactNode[] = [
  <MdInfo />, <MdWarning />, <MdError />, <MdCheckCircle />, null] as const;
const titles = ['Hint Title', ''] as const;
const labels = ['Basic hint'] as const;
const childrenOptions: React.ReactNode[] = [<span key="child">This is extra hint content.</span>, null] as const;

type Combo = {
  label: typeof labels[number];
  title: typeof titles[number];
  icon: typeof icons[number];
  children: typeof childrenOptions[number];
};

function getCombinations(): Combo[] {
  return labels.flatMap((label) => (
    titles.flatMap((title) => (
      icons.flatMap((icon) => (
        childrenOptions.map((children) => ({
          label,
          title,
          icon,
          children,
        }))
      ))
    ))
  ));
}

export function BBBHintCombinations() {
  return (
    <div style={hintListStyle}>
      {getCombinations().map((values) => {
        const {
          label,
          title,
          icon,
          children,
        } = values;

        const key = [
          label,
          title ? 'title' : 'notitle',
          icon ? 'icon' : 'default icon',
          children ? 'children' : 'nochildren',
        ].join('-');

        return (
          <BBBHint
            key={key}
            label={label}
            title={title}
            icon={icon}
            onRequestClose={() => {
              // eslint-disable-next-line no-console
              console.log(`Close requested for hint: ${label}`);
            }}
          >
            {children}
          </BBBHint>
        );
      })}
    </div>
  );
}

export default BBBHintCombinations;

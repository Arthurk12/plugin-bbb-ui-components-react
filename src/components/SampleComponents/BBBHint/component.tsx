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
const children: React.ReactNode[] = [<span key="child">This is extra hint content.</span>, null] as const;

type Combo = {
  label: typeof labels[number];
  title: typeof titles[number];
  icon: typeof icons[number];
  child: typeof children[number];
};

function getCombinations(): Combo[] {
  return labels.flatMap((label) => (
    titles.flatMap((title) => (
      icons.flatMap((icon) => (
        children.map((child) => ({
          label,
          title,
          icon,
          child,
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
          child,
        } = values;
        const iconName = React.isValidElement(icon)
          ? (icon.type as React.ComponentType<unknown>).displayName
            || (icon.type as React.ComponentType<unknown>).name
          : undefined;

        const key = [
          label,
          title ? 'title' : 'notitle',
          iconName,
          child ? 'children' : 'nochildren',
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
            {child}
          </BBBHint>
        );
      })}
    </div>
  );
}

export default BBBHintCombinations;

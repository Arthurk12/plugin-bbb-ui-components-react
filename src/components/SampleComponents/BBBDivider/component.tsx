import * as React from 'react';
import { BBBDivider } from '@mconf/bbb-ui-components-react';

const dividerListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '24px',
};

const longLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc,
eget aliquam massa nisl quis neque. Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Etiam euismod,
justo at facilisis cursus, enim erat dictum erat, nec dictum erat enim at erat.
Suspendisse potenti. Mauris euismod, justo at facilisis cursus, enim erat dictum erat,
nec dictum erat enim at erat. Suspendisse potenti. Mauris euismod, justo at facilisis cursus,
enim erat dictum erat, nec dictum erat enim at erat.`;

export function BBBDividerCombinations() {
  return (
    <div style={dividerListStyle}>
      <div>{longLorem}</div>
      <BBBDivider />
      <div>{longLorem}</div>
    </div>
  );
}

export default BBBDividerCombinations;

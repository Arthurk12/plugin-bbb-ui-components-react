import * as React from 'react';
import { BBBAccordion } from '@mconf/bbb-ui-components-react';
import { MdFavorite } from 'react-icons/md';

const accordionListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const tooltipPlacements = ['top', 'bottom', 'left', 'right'] as const;
interface TooltipLabels extends ReadonlyArray<string | undefined> {}
const tooltipLabels: TooltipLabels = [undefined, 'Info tooltip'] as const;
const buttonHeaders: React.ReactNode[] = [null, <MdFavorite size="1.5rem" />] as const;

type Combo = {
  tooltipLabel: typeof tooltipLabels[number];
  tooltipPlacement: typeof tooltipPlacements[number];
  buttonHeader: typeof buttonHeaders[number];
};

function getCombinations(): Combo[] {
  return tooltipLabels.flatMap((tooltipLabel) => (
    tooltipPlacements.flatMap((tooltipPlacement) => (
      buttonHeaders.flatMap((buttonHeader) => ({
        tooltipLabel,
        tooltipPlacement,
        buttonHeader,
      }))))));
}

export function BBBAccordionCombinations() {
  return (
    <div style={accordionListStyle}>
      {getCombinations().map((values) => {
        const {
          tooltipLabel,
          tooltipPlacement,
          buttonHeader,
        } = values;

        const key = [
          tooltipLabel ? 'tooltip' : 'notooltip',
          tooltipPlacement,
          buttonHeader ? 'header' : 'noheader',
        ].join('-');

        return (
          <BBBAccordion
            key={key}
            title={key}
            tooltipLabel={tooltipLabel}
            tooltipPlacement={tooltipPlacement}
            buttonHeader={buttonHeader}
          >
            Accordion content
          </BBBAccordion>
        );
      })}
    </div>
  );
}

export default BBBAccordionCombinations;

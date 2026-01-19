import * as React from 'react';
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import {
  BBBModal,
  BBBSelect,
  BBBTypography,
  BBButton,
} from '@mconf/bbb-ui-components-react';
import BBBAccordionCombinations from './BBBAccordion/components';
import BBButtonCombinations from './BBButton/component';
import BBBCheckboxCombinations from './BBBCheckbox/component';
import BBBDividerCombinations from './BBBDivider/component';
import BBBHintCombinations from './BBBHint/component';
import BBBNavigationCombinations from './BBBNavigation/component';
import BBBSelectCombinations from './BBBSelect/component';
import BBBTextAreaInputCombinations from './BBBTextAreaInput/component';
import BBBTextInputCombinations from './BBBTextInput/component';
import BBBToggleCombinations from './BBBToggle/component';

type ComponentListItem = {
  // eslint-disable-next-line react/no-unused-prop-types
  label: string;
  // eslint-disable-next-line react/no-unused-prop-types
  value: string;
  // eslint-disable-next-line react/no-unused-prop-types
  Component: React.ComponentType;
};

const componentsList: ComponentListItem[] = [
  { label: 'BBBAccordion', value: 'accordion', Component: BBBAccordionCombinations },
  { label: 'BBButton', value: 'button', Component: BBButtonCombinations },
  { label: 'BBBCheckbox', value: 'checkbox', Component: BBBCheckboxCombinations },
  { label: 'BBBDivider', value: 'divider', Component: BBBDividerCombinations },
  { label: 'BBBHint', value: 'hint', Component: BBBHintCombinations },
  { label: 'BBBNavigation', value: 'navigation', Component: BBBNavigationCombinations },
  { label: 'BBBSelect', value: 'select', Component: BBBSelectCombinations },
  { label: 'BBBTextAreaInput', value: 'textarea', Component: BBBTextAreaInputCombinations },
  { label: 'BBBTextInput', value: 'textinput', Component: BBBTextInputCombinations },
  { label: 'BBBToggle', value: 'toggle', Component: BBBToggleCombinations },
];

export const AllComponentsShowcase: React.FC = function component() {
  const appRef = React.useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(componentsList[0].value);
  const [openModal, setOpenModal] = useState(false);
  const SelectedComponent = componentsList.find((c) => c.value === selected)?.Component;
  return (
    <div
      style={{
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%',
        boxSizing: 'border-box',
      }}
      ref={appRef}
    >
      <BBButton
        onClick={() => setOpenModal(true)}
        label="Abrir modal!"
      />
      {openModal && (
        <BBBModal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          title="Modal Example"
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          footerContent={<BBButton onClick={() => setOpenModal(false)} label="Close" />}
          showDividers
          appElement={appRef.current || undefined}
        >
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
          <p>Test!</p>
        </BBBModal>
      )}
      <div>
        <label htmlFor="component-selector" style={{ marginRight: 8 }}>
          <BBBTypography variant="text2">Choose component showcase:</BBBTypography>
          <BBBSelect
            id="component-selector"
            value={selected}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => (
              setSelected(e.target.value as string)
            )}
          >
            {componentsList.map(({ label, value }: ComponentListItem) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </BBBSelect>
        </label>
      </div>
      <div style={{ marginBottom: 24 }}>
        <BBBTypography variant="header">
          {componentsList.find((c) => c.value === selected)?.label}
          {' '}
          Showcase
        </BBBTypography>
      </div>
      <div style={{ flexGrow: 1, minHeight: 0, overflow: 'auto' }}>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default AllComponentsShowcase;

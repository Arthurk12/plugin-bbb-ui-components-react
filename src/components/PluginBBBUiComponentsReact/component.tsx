import * as React from 'react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { GenericContentSidekickArea, PluginApi } from 'bigbluebutton-html-plugin-sdk';
import SampleComponents from '../SampleComponents/component';

interface PluginBBBUiComponentsReactProps {
  pluginApi: PluginApi;
}

function PluginBBBUiComponentsReact({ pluginApi }: PluginBBBUiComponentsReactProps): null {
  useEffect(() => {
    const sidekickItem = new GenericContentSidekickArea({
      id: 'plugin-bbb-ui-components-react-panel',
      name: 'BBB Ui Components React',
      section: 'Demo',
      buttonIcon: 'whiteboard',
      open: false,
      contentFunction: (element: HTMLElement) => {
        const root = createRoot(element);
        root.render(
          <React.StrictMode>
            <SampleComponents />
          </React.StrictMode>,
        );
        return root;
      },
    });
    pluginApi.setGenericContentItems([sidekickItem]);
  }, [pluginApi]);

  return null;
}

export default PluginBBBUiComponentsReact;

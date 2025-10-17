import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BbbPluginSdk, PluginApi } from 'bigbluebutton-html-plugin-sdk';
import PluginBBBUiComponentsReact from './components/PluginBBBUiComponentsReact/component';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';
const root = ReactDOM.createRoot(document.getElementById(uuid));

function PluginInitializer({ pluginUuid }: { pluginUuid: string }): React.ReactNode {
  BbbPluginSdk.initialize(pluginUuid);
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(pluginUuid);
  return (
    <PluginBBBUiComponentsReact pluginApi={pluginApi} />
  );
}

root.render(
  <React.StrictMode>
    <PluginInitializer pluginUuid={uuid} />
  </React.StrictMode>,
);

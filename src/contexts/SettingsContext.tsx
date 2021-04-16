import React from "react";

interface Settings {
  selectedDate?: Date | null;
}

export interface SettingsContextValue {
  settings: Settings;
  saveSettings: (update: Settings) => void;
}

interface SettingsProviderProps {
  children?: React.ReactNode;
}

const initialSettings: Settings = {
  selectedDate: new Date()
};

export const storeSettings = (settings: Settings): void => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

const SettingsContext = React.createContext<SettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => {}
});

export const SettingsProvider: React.FC<SettingsProviderProps> = (props) => {
  const { children } = props;
  const [settings, setSettings] = React.useState<Settings>(initialSettings);

  const saveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;

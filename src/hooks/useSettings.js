import { useState, useEffect } from "react";
import getUserSettings from "../services/backend/getUserSettings";
import putUserSettings from "../services/backend/putUserSettings";

export default function useSettings(uId, code) {
  const [settings, setSettings] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const _settings = await getUserSettings({ uId, code });
      setSettings(_settings);
      setIsLoading(false);
    }
    fetch();
  }, []); // eslint-disable-line

  const updateSettings = (updatedSettings) => {
    async function update() {
      await putUserSettings({ userId: uId, code }, updatedSettings);
    }
    update();
    setSettings(updatedSettings);
  };

  return [settings, updateSettings, isLoading];
}

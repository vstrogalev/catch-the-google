import { _gameStatuses } from "../../data/constants.js";
import { setStatus } from "../../data/data.js";
import { createNode } from "../../utils/createNode.js";
import { Button } from "../components/Button.js";
import { Settings } from "../components/Settings.js";

export function SettingsPage() {
  const element = createNode("div", "settings main");

  const settingsContainer = Settings();

  const button = Button("START GAME", () => {
    setStatus(_gameStatuses.PLAY);
  });

  element.append(settingsContainer, button);

  return element;
}

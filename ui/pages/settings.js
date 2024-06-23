import { _gameStatuses } from "../../data/constants.js";
import { getGridSize, getPoints, getPointsTo, setStatus } from "../../data/data.js";
import { createNode } from "../../utils/createNode.js"
import { Button } from "../components/Button.js";
import { Setting } from "../components/Setting.js";

export function Settings() {
  const element = createNode('div', 'settings main');

  const settingsContainer = createNode('div', 'settings__container');

  const gridSettings = Setting('Grid size', `${getGridSize().width}x${getGridSize().height}`);
  const pointsToWinSettings = Setting('Points to win', `${getPointsTo().pointsToWin} pts`);
  const pointsToLoseSettings = Setting('Points to lose', `${getPointsTo().pointsToLose} pts`);

  settingsContainer.append(gridSettings, pointsToWinSettings, pointsToLoseSettings);

  const button = Button('START GAME', () => {
    setStatus(_gameStatuses.PLAY);
  });

  element.append(settingsContainer, button);

  return element
}
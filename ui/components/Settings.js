import { Setting } from "./Setting.js";
import { getGridSize, getPointsTo } from '../../data/data.js';
import { createNode } from "../../utils/createNode.js";

export function Settings() {
  const settingsContainer = createNode('div', 'settings__container');

  const gridSettings = Setting('Grid size', `${getGridSize().width}x${getGridSize().height}`);
  const pointsToWinSettings = Setting('Points to win', `${getPointsTo().pointsToWin} pts`);
  const pointsToLoseSettings = Setting('Points to lose', `${getPointsTo().pointsToLose} pts`);

  settingsContainer.append(gridSettings, pointsToWinSettings, pointsToLoseSettings);
  return settingsContainer;
}
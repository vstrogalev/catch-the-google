import { _gameStatuses } from "../data/constants.js";
import { getGameStatus } from "../data/data.js";
import { createNode } from "../utils/createNode.js";
import { Play } from '../ui/pages/play.js';
import { Settings } from '../ui/pages/settings.js';
import { Win } from '../ui/pages/win.js';
import { Lose } from '../ui/pages/lose.js';

const stateTransitions = {
  [_gameStatuses.PLAY]: Play,
  [_gameStatuses.SETTINGS]: Settings, // renderSettings
  [_gameStatuses.WIN]: Win, // renderWin
  [_gameStatuses.LOSE]: Lose, // renderLose
}
export function App() {
  const gameStatus = getGameStatus();

  const element = createNode('div');
  const renderElement = stateTransitions[gameStatus]();
  element.append(renderElement);
  return element
}
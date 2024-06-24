import { createNode } from "../../utils/createNode.js"
import { Board } from "../components/Board.js";
import { Points } from "../components/Points.js";
import { Settings } from "../components/Settings.js";

export function Play() {
  const element = createNode('div', 'play main');
  const settingsContainer = Settings();
  const points = Points();
  const board = Board();

  element.append(settingsContainer, points, board);

  return element
}
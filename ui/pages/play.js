import { createNode } from "../../utils/createNode.js"
import { Settings } from "../components/Settings.js";

export function Play() {
  const element = createNode('div', 'play main');
  const settingsContainer = Settings();

  element.append(settingsContainer);

  return element
}
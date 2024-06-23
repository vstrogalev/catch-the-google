import { getPoints } from "../../data/data.js";
import { createNode } from "../../utils/createNode.js"
import { Button } from "../components/Button.js";

export function Lose() {
  const element = createNode('div');
  const title = createNode('h2', '', 'You Lose!');
  const description = createNode('p', '', "You'll be lucky next time");

  const points = getPoints()
  const pointsContainer = createNode('div');

  const pointsCatchRow = createNode('div');
  const pointsCatchTitle = createNode('div', '', 'Catch:');
  const pointsCatchData = createNode('div', '', points.catch);
  pointsCatchRow.append(pointsCatchTitle, pointsCatchData);

  const pointsMissRow = createNode('div');
  const pointsMissTitle = createNode('div', '', 'Miss:');
  const pointsMissData = createNode('div', '', points.miss);
  pointsMissRow.append(pointsMissTitle, pointsMissData);

  pointsContainer.append(pointsCatchRow, pointsMissRow);

  const button = Button('Play again', () => {
    resetGame();
  });

  element.append(title, description, pointsContainer, button);
  return element
}
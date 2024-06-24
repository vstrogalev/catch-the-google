import { getPoints } from "../../data/data.js";
import { createNode } from "../../utils/createNode.js"
import { Button } from "../components/Button.js";

export function Lose() {
  const element = createNode('div');
  const title = createNode('h2', '', 'You Lose!');
  const description = createNode('p', '', "You'll be lucky next time");

  const points = getPoints()
  const pointsContainer = createNode('div', 'points__container');

  const pointsCatchRow = createNode('div', 'points__row');
  const pointsCatchTitle = createNode('div', 'points__title', 'Catch:');
  const pointsCatchData = createNode('div', 'points__data', points.catch);
  pointsCatchRow.append(pointsCatchTitle, pointsCatchData);

  const pointsMissRow = createNode('div', 'points__row');
  const pointsMissTitle = createNode('div', 'points__title', 'Miss:');
  const pointsMissData = createNode('div', 'points__data', points.miss);
  pointsMissRow.append(pointsMissTitle, pointsMissData);

  pointsContainer.append(pointsCatchRow, pointsMissRow);

  const button = Button('Play again', () => {
    resetGame();
  });

  element.append(title, description, pointsContainer, button);
  return element
}
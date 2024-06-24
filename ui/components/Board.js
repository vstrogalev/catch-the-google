import { _gridItemSize } from "../../data/constants.js";
import { getGooglePosition, getGridSize } from "../../data/data.js";
import { createNode } from "../../utils/createNode.js";

export function Board() {
  const gridSize = getGridSize();
  const googlePosition = getGooglePosition();
  const board = createNode('table', 'board');

  for(let x = 0; x < gridSize.width; x++) {
    const row = createNode('tr', 'board__row');

    for(let y = 0; y < gridSize.height; y++) {
      const item = createNode('td', 'board__item');
      item.style.width = `${_gridItemSize}px`;

      if(x === googlePosition.x && y === googlePosition.y) {
        const imgGoogle = createNode('img', 'googleImg', '', '../../images/google.svg', 'google image');
        item.append(imgGoogle);
      }

      row.appendChild(item);
    }
    board.appendChild(row);
  }

  return board
}
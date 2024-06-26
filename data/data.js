import { _gameStatuses } from "./constants.js";

const _initialState = {
  points: {
    catch: 0,
    miss: 0,
  },
  settings: {
    gridSize: {
      width: 4,
      height: 4,
    },
    pointsToWin: 20,
    pointsToLose: 10,
  },
  googlePosition: {
    x: 0,
    y: 0,
  },
  gameStatus: _gameStatuses.SETTINGS,
};

let _state = { ..._initialState };

let _Observer = () => {};

export function subscribe(cb) {
  _Observer = cb;
}

export function resetGame() {
  _state = { ..._initialState };
  _Observer();
}

export function getPoints() {
  return {
    catch: _state.points.catch,
    miss: _state.points.miss,
  };
}

export function getGridSize() {
  return {
    width: _state.settings.gridSize.width,
    height: _state.settings.gridSize.height,
  };
}

export function getGameStatus() {
  return _state.gameStatus;
}

export function getGooglePosition() {
  return {
    x: _state.googlePosition.x,
    y: _state.googlePosition.y,
  };
}

export function getPointsTo() {
  return {
    pointsToWin: _state.settings.pointsToWin,
    pointsToLose: _state.settings.pointsToLose,
  };
}

export function setStatus(newStatus) {
  _state.gameStatus = newStatus;
  _Observer();
}

function getNewPosition() {
  let x, y;
  do {
    x = Math.floor(Math.random() * _state.settings.gridSize.width);
    y = Math.floor(Math.random() * _state.settings.gridSize.width);
  } while (_state.googlePosition.x === x && _state.googlePosition.y === y);
  _state.googlePosition.x = x;
  _state.googlePosition.y = y;
}

const googleMoves = setInterval(() => {
  getNewPosition();
  console.log(x, y);
  _Observer();
}, 1000);

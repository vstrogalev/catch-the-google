import { _gameStatuses } from "./constants.js";

const _initialState = {
  points: {
    catch: 0,
    miss: 0
  },
  settings: {
    gridSize: {
      width: 4,
      height: 4
    },
    pointsToWin: 20,
    pointsToLose: 10
  },
  googlePosition: {
    x: 0,
    y: 0
  },
  gameStatus: _gameStatuses.SETTINGS
}

let _state = {..._initialState};

export function resetGame() {
  _state = {..._initialState};
}

export function getPoints() {
  return {
    catch: _state.points.catch,
    miss: _state.points.miss
  }
}

export function getGridSize() {
  return {
    width: _state.settings.gridSize.width,
    height: _state.settings.gridSize.height
  }
}

export function getGameStatus() {
  return _state.gameStatus
}

export function getGooglePosition() {
  return {
    x: _state.googlePosition.x,
    y: _state.googlePosition.y
  }
}
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
  }
}

let _state = {..._initialState};

export function resetGame() {
  _state = {..._initialState};
}


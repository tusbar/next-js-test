const globalState = {
  number: null
}

function generateNumber() {
  globalState.number = Math.random() * 100
}

export {
  globalState,
  generateNumber
}

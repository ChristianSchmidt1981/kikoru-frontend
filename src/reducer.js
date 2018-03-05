const DefaultState = {
  
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'INIT': {
      const newState = getCopyOfState(state);
      return newState;
    }

    default:
      return state;
  }
}

module.exports = Reducer;

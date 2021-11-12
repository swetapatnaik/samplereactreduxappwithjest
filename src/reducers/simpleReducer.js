const initState = {
  btnClickValue: ''
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        btnClickValue: action.payload
      }
    default:
      return state
  }
}

export default reducer

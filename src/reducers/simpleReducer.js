const initState = {
  user: {},
  btnClickValue: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        btnClickValue: state.user.firstName ? state.user.firstName : ''
      }
    case 'FORM_SUBMIT':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducer

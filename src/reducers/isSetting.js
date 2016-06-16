export default function isSetting(state = false, action) {
  switch(action.type) {
    case 'IS_SETTING':
      return action.payload
    default:
      return state
  }
}

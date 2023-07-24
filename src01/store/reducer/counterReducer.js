function counter(state = { value: 0 }, action) {
    let newstate = state
    switch (action.type) {
        case 'add':
            newstate.value = newstate.value + 1
            return newstate;
        case 'minus':
            newstate.value = newstate.value - 1
            return newstate;
        default:
            return  newstate
    }
}
export default counter
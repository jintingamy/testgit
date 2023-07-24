function counter(state = { show: true }, action) {
    let newstate = state
    switch (action.type) {
        case 'show':
            newstate.show = !newstate.show
            return newstate;
        case 'hide':
            newstate.value = newstate.value - 1
            return newstate;
        default:
            return newstate
    }
}
export default counter
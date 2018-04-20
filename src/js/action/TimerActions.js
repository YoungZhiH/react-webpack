import { START, STOP, RESET } from './actionsTypes'

const onStart = () => ({ type: START })
const onStop = () => ({ type: STOP })
const onReset = () => ({ type: RESET })

export {
    onStart,
    onStop,
    onReset,
}

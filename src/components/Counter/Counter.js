import {useDispatch, useSelector} from "react-redux";
import classes from "./Counter.module.css"
import {counterActions} from "../../store/slices/counterSlice";

const Counter = () => {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.counter.value)
    const isCounterVisible = useSelector(state => state.counter.isVisible)

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };

    const onIncrement = () => {
        dispatch(counterActions.increment())
    }

    const onDecrement = () => {
        dispatch(counterActions.decrement())
    }

    const onIncreaseBy = (amount) => {
        dispatch(counterActions.increaseBy(amount))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={`${classes.value} ${isCounterVisible ? null : classes.hidden}`}>
                <p>{counter}</p>
            </div>
            <div>
                <button type={"button"} onClick={onIncrement}>increment</button>
                <button type={"button"} onClick={() => onIncreaseBy(5)}>increase by 5</button>
                <button type={"button"} onClick={onDecrement}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

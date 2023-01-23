import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter'

const Counter = () => {

  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showCounter);
  const dispatch=useDispatch();
  const increHandler=()=>{
    dispatch(counterActions.increment());
  }
  const decreHandler=()=>{
    dispatch(counterActions.decrement());
  }

  const increaseHandler=()=>{
    dispatch(counterActions.increase(5));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={increHandler}>Increase</button>
      <button onClick={decreHandler}>Decrease</button>
      <button onClick={increaseHandler}>increase by 5</button>
     {show &&  <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {actions} from './store/index';

function App() {

  const count=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
 const incrementFn=()=>
 {
dispatch(actions.incrementFn());
 }
const decrementFn=()=>
{
  dispatch(actions.decrementFn());
}
const addBy=()=>
{
  dispatch(actions.AddByFn(10));
}
  return (
    <div className="App">
      <h1><center>React Redux ToolKit Counter App Example</center></h1>
      <h1>Count:{count}</h1>
      <button onClick={incrementFn}>Increment</button>
      <button onClick={decrementFn}>Decrement</button>
      <button onClick={addBy}>Add 10</button>
    </div>
  );
}

export default App;

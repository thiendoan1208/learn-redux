import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from './action/actions';

function App(props) {
  const dispatch = useDispatch();

  // event handler
  const handleIncrease = () => {
    // dispatch action
    dispatch(increaseCounter());
  };

  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <>
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    </>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

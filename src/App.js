import Home from './components/Home';

function App(props) {

  return (
    <>
      <Home />
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

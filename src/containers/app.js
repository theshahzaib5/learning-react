import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => {
  return {
    info : state.info
  };
}

const App = connect(
  mapStateToProps
)(AppComponent);

export default App;

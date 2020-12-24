import AppContext from './AppContext';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import store from './store';
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import history from './@history'

function App() {
  return (
    <AppContext.Provider>
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={HomeScreen} />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;

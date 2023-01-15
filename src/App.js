import { Provider } from "react-redux";
import { NotificationContainer } from 'react-notifications';

import './App.css';
import Main from './components/Main';
import store from "./store";

import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
        <NotificationContainer />
      </Provider>
    </>
  );
}

export default App;

import './App.css';
import { NotificationContainer } from 'react-notifications';

import Main from './components/Main';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <>
      <Main />
      <NotificationContainer />
    </>
  );
}

export default App;

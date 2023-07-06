import logo from './logo.svg';
import './App.css';
import Tables from './components/Table';
import { Provider } from 'react-redux';
import store from './components/Redux/store'
function App() {
  return (
   <>
   <Provider store={store}>
   <Tables/>
   </Provider>
   </>
  );
}

export default App;

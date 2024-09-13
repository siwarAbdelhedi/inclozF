import { Fragment } from 'react';
import Header from './components/Navbar/Header'
import HomeScreen from './pages/Home';

const App=()=> {
  return (
    <div>
      <Header/>
      <Fragment>
        <HomeScreen/>
      </Fragment>
    </div>
  );
}

export default App

import './App.css';
import Header from './Components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

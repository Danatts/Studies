import CardsList from './components/CardsList/CardsList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.styles.css';
import CardInfo from './components/CardInfo/CardInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardsList />} />
        <Route path='/:name' element={<CardInfo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

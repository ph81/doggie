import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/dogs' element={<Dogs />} />
        <Route index path='/cats' element={<Cats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
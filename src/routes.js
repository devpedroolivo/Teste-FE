import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './Home'
import Filme from './Filme'
import Header from './components/Header'

function Rotas() {
 return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
    </Routes>
    </BrowserRouter>
 )
}

export default Rotas;
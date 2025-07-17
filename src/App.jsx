import Home from './pages/Home.jsx';
import Verse from './pages/Verse.jsx';
import Promise from './pages/Promise.jsx';


import {Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <>
      <nav className="bg-p-orange text-b-gray flex justify-around items-center p-[20px]">
        <h2 className="text-2xl sm:text-4xl">ROI</h2>
        <ul className="flex gap-2 sm:gap-4">
          <li><Link to="/" className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl transition delay-75 border-2 border-b-gray duration-300 ease-in-out hover:bg-b-gray hover:text-white active:bg-b-gray active:text-white">HOME</Link></li>
          <li><Link to="/verse" className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl transition delay-75 border-2 border-b-gray duration-300 ease-in-out hover:bg-b-gray hover:text-white active:bg-b-gray active:text-white">VERSE</Link></li>
          <li><Link to="/promise" className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl transition delay-75 border-2 border-b-gray duration-300 ease-in-out hover:bg-b-gray hover:text-white active:bg-b-gray active:text-white">PROMISE</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/verse' element={<Verse />} />
        <Route path='/promise' element={<Promise />} />
      </Routes>
    </>
  )
}

export default App

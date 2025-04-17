// main app routing and layout usage

import { Routes, Route } from 'react-router-dom';
import Home from './pages/user-pages/Home';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

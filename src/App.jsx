import { useState } from 'react';
import UserRegistration from './components/UserRegistration';
import UserSearch from './components/UserSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path="/" element={<UserRegistration />} />
          <Route path="/UserSearch" element={<UserSearch/>}/>
          </Routes>
      </Router>
      </div>
  );
}

export default App

import { Navigate, Route, Routes } from 'react-router';
import Nav from './components/Nav';
import useProvider from './hooks/useProvider';
import Addnote from './pages/Addnote';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user, authIsReady } = useProvider();
  return (
    <div className="App bg-[#2F2F2F] text-white">
      {authIsReady && (
        <div className="contianer max-w-[1200px] mx-auto h-screen">
          <Nav />
          <Routes>
            <Route exact path="/" element={user ? <Home /> : <Navigate to="/intro" />} />
            <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route exact path="/intro" element={!user ? <Introduction /> : <Navigate to="/" />} />
            <Route exact path="/add" element={user ? <Addnote /> : <Navigate to="/add" />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

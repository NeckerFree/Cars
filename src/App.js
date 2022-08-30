import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import FrontPage from './components/frontPage/FrontPage';
import Car from './components/details/Car';
import AllCars from './components/car/AllCars';
import DeleteCar from './components/car/deleteCars';
// import Home from './components/Home';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import getRespose from './components/users/checkData';
function App() {
  const [objAuth, setAuthenticated] = useState({ authenticated: false });
  const [show, setShow] = useState(false);
  const [responseText, setResponse_text] = useState('');
  useEffect(() => {
    setResponse_text(checkData.getRespose());
    setShow(responseText!==null);
  });
  const handleCallback = (authValue) => {
    setAuthenticated({ authenticated: authValue });
  };
  return (
    <div className="app">
      <>
        <div className="frame">
          <NavCars authenticated={objAuth.authenticated} />
          <Routes>
            <Route path="/" element={<Login handleClick={handleCallback} />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/logout" element={<Logout handleClick={handleCallback} />} />
            <Route path="/user" element={<User />} />
            <Route path="/users/:userId" element={<FrontPage />} />
            <Route path="/users/:userId/cars" element={<AllCars />} />
            <Route path="/users/:userId/cars/delete" element={<DeleteCar />} />
            <Route path="/users/:userId/cars/:carId" element={<Car />} />
          </Routes>
          <ToastContainer className="p-3" position="middle-center">
            <Toast className="d-inline-block m-1" bg="info" onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>
              <strong className="me-auto">Cars App</strong>
              </Toast.Header>
              <Toast.Body className={'Info' === 'Dark' && 'text-white'}>{responseText}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </>
    </div>
  );
}

export default App;

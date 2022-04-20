import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";
import Deals from "./Deals";
import CreatePost from "./CreatePost";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <NavLink exact className="active" to="/">Home</NavLink>
        <NavLink exact className="active" to="/deals">Deals</NavLink>
        <NavLink className="active" to="/register">Register</NavLink>
        <NavLink className="active" to="/login">Login</NavLink>
        <NavLink className="active" to="/account">Account</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<PublicRoute/>}>
            <Route path='/register' element={<Register/>}/>
          </Route> 
          <Route path="/login" element={<PublicRoute/>}>
            <Route path='/login' element={<Login/>}/>
          </Route> 
          <Route path="/account" element={<PrivateRoute/>}>
            <Route path='/account' element={<Account/>}/>
          </Route>
          <Route path="/createpost" element={<PrivateRoute/>}>
            <Route path='/createpost' element={<CreatePost/>}/>
          </Route>
          <Route path="/deals" element={<Deals/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

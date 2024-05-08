import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/authContext";

function App() {
    const {authUser}=useAuthContext()
  return (
       <BrowserRouter>
            <div className={'w-screen h-screen back flex items-center justify-center'}>
                <Routes>
                    <Route path={'/'} element={authUser ?<Home/>:<Navigate to={'/login'}/>}/>
                    <Route path={'/login'} element={authUser?<Navigate to={'/'}/>:<Login/> }/>
                    <Route path={'/signup'} element={authUser?<Navigate to={'/'}/>:<Signup/>}/>
                </Routes>
                <Toaster/>
            </div>
       </BrowserRouter>
  );
}

export default App;

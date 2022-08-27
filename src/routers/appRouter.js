import { onAuthStateChanged } from "firebase/auth";
import React , { useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route,useNavigate } from "react-router-dom";
import App from "../App";
import Login from "../components/Auth/Login";
import PrivateRoute from "../components/Auth/PrivateRoute";
import SignIn from "../components/Auth/SignIn";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { getProfile, setAuth } from "../store/actions/authAction";
import { getDbChannels } from "../store/actions/channelActions";
;

const AppRouter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        (async()=>{
          console.log(user)
          dispatch( await(getProfile(user.uid)));
          dispatch( await getDbChannels());
          navigate('/')
          console.log("user1")
        })()
        
       
      } else {
       
        console.log('web-soket')
        navigate('login')
      }
    });
  }, []);
  
  return (
   
 
      <Routes>
        <Route path='*' element={(
          <PrivateRoute>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </PrivateRoute>
        )} />
        
        <Route path='login' element={<Login />} />
        <Route path='signIn' element={<SignIn />} />
      </Routes>
  
  );
};

export default AppRouter;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import { logOutProfile } from "../../store/actions/authAction";
;

const UserPanel = () => {
  const {profile} = useSelector((state)=>state.auth);
  const dispatch = useDispatch()
  const logOut = () =>{
    signOut(auth).then(() => {
      console.log('çıkış yapıldı')
      dispatch(logOutProfile())
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="d-flex justify-content-between p-2" style={{ color:"white"}}>
      <p>{profile.name}</p>
      <div>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut}/>
      </div>
    </div>
  );
};

export default UserPanel;

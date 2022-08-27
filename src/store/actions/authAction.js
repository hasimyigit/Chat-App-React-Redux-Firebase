import * as types from './types';
import { database } from "../../firebase/firebase";
import { ref, push,get,child } from "firebase/database";



export const dbAddUser = async (user = {uid:0}) => {
    try {
      let res = await push(ref(database, `users/${user.uid}`), user);
        console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

export const setProfile = (profile) => ({
    type:types.SET_PROFILE,
    payload:profile
})
export const logOutProfile = () => ({
    type:types.LOGOUT_PROFILE
})

export const defProfile = () => ({
    type:'default'
})

export const getProfile = async (uid) => {
    const data = (await get(child(ref(database), `users/${uid}`))).val();
     console.log(data)
   return data? setProfile(Object.values(data)[0]) : defProfile()
}
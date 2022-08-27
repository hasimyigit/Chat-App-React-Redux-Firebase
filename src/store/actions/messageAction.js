import * as types from './types';
import { database } from "../../firebase/firebase";
import { ref, push, get, child } from "firebase/database";


const addMessage= (message = {}) => ({
    type: types.CREATE_MESSAGE,
    payload: message,
  });
  
  export const dbAddMessage = async (message = {}, currentChannel) => {
    try {
      let res = await push(ref(database, `messages/${currentChannel.key}`), message);
      message.key = res.key;
      return addMessage(message);
    } catch (err) {
      console.log(err);
    }
  };


  const setMessages = (messages = []) => ({
    type: types.SET_MESSAGES,
    payload: messages,
  });
  
  export const getDbMessages = async (key) => {
    try {
      const data = (await get(child(ref(database), `messages/${key}`))).val();
      console.log(data)
      if(data){
        const messages = Object.entries(data).map((m) => {
            return {
              ...m[1],
            };
          });
          return setMessages(messages);
      }
   
      return setMessages([]);
      
    } catch (err) {
      console.log(err);
      return {type:"Default"}
    }
  };
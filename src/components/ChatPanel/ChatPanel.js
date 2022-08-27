import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../../firebase/firebase";
import { dbAddMessage, getDbMessages } from "../../store/actions/messageAction";
import {  serverTimestamp } from "firebase/firestore";
import Message from "./Message";

const ChatPanel = ({currentChannel}) => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const channelMessages = useSelector((state)=>state.messages )
    const {profile} = useSelector((state)=>state.auth )
    const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "end",
    });
  },[channelMessages]);

    useEffect( async () => {
     
   
          dispatch(( await getDbMessages(currentChannel.key)))
        
      
    }, [currentChannel]);
    // useEffect(() => {
    //     console.log(currentChannel.key)
      
    //     let cMessages = messages.find((m)=> m.channelKey ==  currentChannel.key)
    //     console.log(cMessages)
    //     if(cMessages !== null){
    //         setChannelMessages(cMessages)
    //         console.log(channelMessages)
    //     }
     

    // }, [currentChannel]);
    

    const handSubmit =  async (e) => {
        e.preventDefault();
        if(content !==''){
            let message = {
                content,
                timestamp : new Date().getTime(),
                user:{
                    id:profile.uid,
                    avatar:profile.avatar,
                    name:profile.name
                }
            }
            dispatch((await dbAddMessage(message,currentChannel)));
            setContent('')
        }
    }
  return (
    <div style={{ height: "100vh" }}>
      <header>
        <h4>
          <FontAwesomeIcon icon={faHashtag} />
          {currentChannel.name}
        </h4>
      </header>

      <div
        className=" border border-secondary rounded overflow-auto"
        style={{ height: "85vh" }}
      >
          {channelMessages && channelMessages.map((value,key)=>(
             
              <Message key={key} message={value}/>
          ))}
            <div ref={messagesEndRef}></div>
      </div>

      <div className=" mt-1">
          <form onSubmit={handSubmit}>

         
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              +
            </span>
          </div>
          <input
          value={content}
          onChange={({target:{value}})=>{setContent(value)}}
            type="text"
            className="form-control"
            placeholder={"#" + currentChannel?.name + " Kanalına mesaj gönder"}
          />
        </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPanel;

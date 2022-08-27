import React, { useState } from "react";
import { useDispatch  } from 'react-redux'
import {dbAddChannel} from '../../store/actions/channelActions';
const CreateChannelForm = ({ open,setOpen }) => {
    const dispatch = useDispatch();
    const [channel, setChannel] = useState("")
    
    const addChannel = async() => {
        if(channel!==''){
            dispatch( (await dbAddChannel({createdBy :
                { avatar:"https://ui-avatars.com/api/?name=hasim+yigit&background=random&color=fff",name:"hasim yigit"},
                name:channel})))
        }  
        setOpen(!open)
    }
  return (
    <div
    className="text-center"
      style={{
        position: "fixed",
        top: "50%",
        right: "50%",
        transform: "translate(50%,-50%)",
        border: "2px solid #999",
        borderRadius:"5px",
        padding: "10px",
        display: open == true ? "block" : "none",
        zIndex:"100"
    
      }}
    >
      <label  className="form-label" style={{color:"black"}}>
      Kanal Ekle
      </label>
      <input
      value={channel}
      onChange={({target:{value}})=>{setChannel(value); }}
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="#Kanal adı giriniz"
      />
      <button className="btn btn-info mt-2 " onClick={addChannel}>Ekle</button>
    </div>
  );
};

export default CreateChannelForm;

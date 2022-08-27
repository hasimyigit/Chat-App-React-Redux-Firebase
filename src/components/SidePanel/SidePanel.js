import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CreateChannelForm from "../Channel/CreateChannelForm";
import ChannelList from "../Channel/ChannelList";
import { useSelector } from "react-redux";
const SidePanel = () => {
  const [color, setColor] = useState("#22194d");
  const  [open, setOpen] = useState(false)
  const {channels} = useSelector(state => state.channels)
  return (
    <div
      style={{
        width: "100%",
        fontSize: "1.2rem",
        background: color,
        height: "100vh",
       
      }}
    >
      <header>
        <UserPanel  />
      </header>
      <section>
        <div className="d-flex justify-content-between p-2" style={{ color:"white"}}>
        Kanallar
            <span style={{ float: "right" }}>
            <FontAwesomeIcon onClick={()=>{setOpen(!open)}}  icon={faPlus} />
            </span>
        </div>
        <div className="d-flex justify-content-between p-2">
          {channels && <ChannelList {...{channels}} /> }
       
        </div>
    
      </section>
      <CreateChannelForm
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default SidePanel;

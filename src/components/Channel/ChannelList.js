import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentChannel } from '../../store/actions/channelActions';
import ChannelItem from './ChannelItem'

const ChannelList = ({channels}) => {
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      console.log('didCList')
      if(!mounted && channels.length>0){
          dispatch(setCurrentChannel(channels[0]))
        
      }
      setMounted(true);
    }, []);
    
   const changeChannel = (channel) =>{
       console.log(channel)
    dispatch(setCurrentChannel(channel))
   }
    return (
        <ul className="list-group  w-100 overflow-auto" style={{height:"75vh"}}>
            {channels.map((channel)=>(
                <ChannelItem 
                changeChannel={changeChannel}
                key={channel.key} 
                {...{channel}} />
            ))}
  
        </ul>
    )
}

export default ChannelList

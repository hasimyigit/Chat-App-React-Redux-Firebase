import React from 'react'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'


const ChannelItem = ({channel,changeChannel}) => {
    const {currentChannel} = useSelector(state => state.channels)
    return (
        
        <li onClick={()=>{changeChannel(channel)}} className={channel.key == currentChannel?.key ? "list-group-item active":"list-group-item"} >{channel.name}
        <span style={{ float: "right" }}>
            <FontAwesomeIcon   icon={faHashtag} />
            </span>
        </li>
        
       
    )
}

export default ChannelItem

import React from 'react';
import moment from "moment";
const Message = ({message}) => {
    const timeFromNow = (timestamp) => { return moment(timestamp).fromNow()}

  return (
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src={message.user.avatar} className="rounded-circle me-2" alt="..."/>
      <strong className="me-auto">{message.user.name}</strong>
      <small>{timeFromNow(message.timestamp)}</small>
    </div>
    <div className="toast-body">
      {message.content}
    </div>
  </div>
  );
};

export default Message;

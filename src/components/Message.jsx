import React, {useContext} from 'react'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { useRef } from 'react';
import { useEffect } from 'react';


const Message = ({message}) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message])

  // console.log(message)
  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL } alt="" />
        <span>Just Now</span>
      </div>
      <div className="mesageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message
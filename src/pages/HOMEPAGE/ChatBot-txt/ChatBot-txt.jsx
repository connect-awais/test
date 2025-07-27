import React from 'react'
import './ChatBot-txt.css'
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from "react-icons/md";

const ChatBot = () => {
  return (
    <div className='chatbot-section'>
        <h1>BMW M CHATBOT</h1>
        <Link to='/ai.chatbot' ><MdKeyboardArrowRight size={25} style={{ position: "relative", top: "6px" }}/>Do you have a question?</Link>
    </div>
  )
}

export default ChatBot
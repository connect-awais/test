import React from 'react'
import './BmwNews.css';

import { MdKeyboardArrowRight } from "react-icons/md";

const BmwNews = () => {
  return (
    <div className="news-header">
        <p>BMW M NEWSLETTER</p>
        <a href="#"><MdKeyboardArrowRight size={25} style={{position: 'relative', top: '5px'}} />Subscribe Now</a>
    </div>
  )
}

export default BmwNews
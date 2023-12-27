/** @format */

import React from "react";

import Menu from "../components/menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://www.kochiesbusinessbuilders.com.au/wp-content/uploads/2018/11/blog.jpg'
          alt=''
        />
        <div className='user'>
          <img
            src='https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=992'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

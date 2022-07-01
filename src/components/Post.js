import React from 'react';
import './postcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsis,faSquareShareNodes,faEye} from '@fortawesome/free-solid-svg-icons'

function Post({ detail }) {
    return (
        <div className='postContainer'>
            <div className='postImage'>
                <img src={detail.image} />
            </div>
            <div className='postContent'>
                <h4 className='posttype'>{detail.type}</h4>
                <div className='postdesc'>{detail.title}</div>
                <span style={{
                    position:"absolute",
                    right:"20px",
                    top:"40px",
                    fontSize:"20px"
                }}><FontAwesomeIcon icon={faEllipsis} /></span>
                <p className='postpara'>{detail.para}</p>
            </div>
            <div className='postUser'>
                <div className='postUserpic'>
                    <img src={detail.userpic}/>
                    <div className='UserName' >{detail.userid}</div>
                </div>
                <span className ="likediv" ><FontAwesomeIcon icon={faEye} /> {detail.views} views </span>
                
                <div style={{
                    position:'absolute',
                    right:"20px",
                    bottom:"5px",
                    fontSize:"30px"
                }}><FontAwesomeIcon icon={faSquareShareNodes} /> </div>
            </div>


        </div>
    );
}



export default Post;

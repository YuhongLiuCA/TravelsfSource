import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaAppleAlt, FaSnowflake,FaThumbsUp,FaSun } from "react-icons/fa";

import { IoFlower } from "react-icons/io5";

function Footer(props) {
    return(
    <div className="footer bg-primary text-white">
        <div className="container">
            <div className="row justify-content-center mt-2 ">             
                <div className="col-12 col-sm-6">
                    <h4>Links</h4>
                    <ul className="list-unstyled" style={{"font-weight": "bold", color: "blue",display: "flex"}}>                    
                        <li><a class="nav-link" style={{textDecoration: "underline", color:"white"}} href="/spring"><IoFlower />Spring</a></li>
                        <li><a class="nav-link" style={{textDecoration: "underline", color:"white"}} href="/summer"><FaSun />Summer</a></li>
                        <li><a class="nav-link" style={{textDecoration: "underline", color:"white"}} href="/autumn"><FaAppleAlt />Autumn</a></li>
                        <li><a class="nav-link" style={{textDecoration: "underline", color:"white"}} href="/winter"><FaSnowflake />Winter</a></li>
                        <li><a class="nav-link" style={{textDecoration: "underline", color:"white"}} href="/hot"><FaThumbsUp />Popular</a></li>
                    </ul> 
                </div> 
                <div className="col-12 col-sm-5" style={{"font-weight": "bold", color: "white",display: "flex", "flex-direction": "column"}}>
                    <div style={{display: "flex", "flex-direction": "row"}}>
                    <p style={{"font-weight": "bold", color: "white","font-size": "18px"}}> Our Address:</p>
		            <p style={{"font-size": "18px", color: "white", "font-weight": "normal"}}>&nbsp;&nbsp;San Francisco Bay Area, California, USA<br /> </p>
                    </div>
                    <div style={{display: "flex", "flex-direction": "row"}}>
                    <MdEmail style={{width: "20px", "font-size": "18px", color: "white", "font-weight": "normal","justify-content": "center"}} />:&nbsp;&nbsp;<a href="mailto:yuhongliu.ca@gmail.com" style={{textDecoration: "none", color:"white", "font-size": "18px", "font-weight": "normal"}}>
                         yuhongliu.ca@gmail.com</a>
                    </div>
                </div>
               

                <div className="col-12 col-sm-5">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Yuhong Liu Travel Reference San Francisco</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Footer;
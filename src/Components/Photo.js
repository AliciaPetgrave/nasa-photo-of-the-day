import React, {useState, useEffect} from "react";



function Photo (props){

    return (
        <div className = "photo">
            <img src= {props.photo.hdurl} alt="NASA photo of the day"/>
        </div>
    )
}

export default Photo;
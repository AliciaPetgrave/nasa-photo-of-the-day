import React, {useState, useEffect} from "react";



function Title(props){

    return (
        <div className="container">
            <div className = "title">
                <h1>{props.data.title}</h1>
            </div>
        </div>
    )
}

export default Title;
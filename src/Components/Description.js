import React, {useState, useEffect} from "react";



function Description (props){

    return (
        <div className="description">
            <p>{props.desc.explanation}</p>
        </div>
    )
}

export default Description;
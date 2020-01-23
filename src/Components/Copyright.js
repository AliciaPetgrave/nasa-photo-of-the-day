import React, {useState, useEffect} from "react";



function Copyright (props){

    return (
        <div className="copyright">
            <p>© {props.copy.copyright}</p>
        </div>
    )
}

export default Copyright;
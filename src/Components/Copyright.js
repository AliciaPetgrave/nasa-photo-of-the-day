import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Copystyle = styled.p`
    display:flex;
    justify-content:center;
    padding:20px 0;
`;


function Copyright (props){

    return (
        <div className="copyright">
            <Copystyle>© {props.copy.copyright}</Copystyle>
        </div>
    )
}

export default Copyright;
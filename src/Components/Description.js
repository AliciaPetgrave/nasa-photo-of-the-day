import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Pstyle = styled.p`
    display:flex;
    justify-content:center;
    padding:20px 50px;
`;


function Description (props){

    return (
        <div className="description">
            <Pstyle>{props.desc.explanation}</Pstyle>
        </div>
    )
}

export default Description;
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Titlestyle = styled.h1`
    display:flex;
    justify-content:center;
    padding:20px 0;
`;

function Title(props){

    return (
        <div className="container">
            <div className = "title">
                <Titlestyle>{props.data.title}</Titlestyle>
            </div>
        </div>
    )
}

export default Title;
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Datestyle = styled.h4`
    display:flex;
    justify-content:center;
    padding:10px 0;
`;


function Date (props){

    return (
        <div className="date">
            <Datestyle>{props.mydate.date}</Datestyle>
        </div>
    )
}

export default Date;
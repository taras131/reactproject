import React from "react";
import style from "./Newmessage.module.css";

const Newmessage = (props) =>{

    const postNewMessage = () => {
        props.postNewMessage();
    }

    const input = (e) => {
        let body = e.target.value;
        props.input(body);
    }

    return (
        <div className = {style.newmessage}>
            <input onChange = {input} value = {props.inputValue}  /> 
            <button onClick= {postNewMessage} >Отправить</button>
        </div>
    );
}

export default Newmessage;
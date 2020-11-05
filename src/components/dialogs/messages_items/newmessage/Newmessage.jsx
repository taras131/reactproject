import React from "react";
import style from "./Newmessage.module.css";

const Newmessage = (props) =>{

    const newMessageElement = React.createRef();

    const postNewMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        newMessageElement.current.value = ``;
    }

    return (
        <div className = {style.newmessage}>
            <input ref = {newMessageElement} /> 
            <button onClick= {postNewMessage} >Отправить</button>
        </div>
    );
}

export default Newmessage;
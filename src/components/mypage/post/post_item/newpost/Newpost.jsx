import React from "react";
import style from "./Newpost.module.css";

const Newpost = (props) => {

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const input = () => {
        let text = newPostElement.current.value;
        props.input(text);
    };

    return (
        <div className = {style.newpost}>
            <input onChange = {input} ref ={newPostElement} value = {props.value} /> 
            <button onClick = {addPost}>Опубликовать</button>
        </div>
    );
}

export default Newpost;
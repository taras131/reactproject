import React from "react";
import style from "./Newpost.module.css";

const Newpost = (props) =>{

    const newPostElement = React.createRef();

    const addPost = () =>{
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = ``;   
    }

    return (
        <div className = {style.newpost}>
            <input ref ={newPostElement} /> 
            <button onClick = {addPost}>Опубликовать</button>
        </div>
    );
}

export default Newpost;
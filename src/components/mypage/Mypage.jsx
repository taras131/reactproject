import React from "react";
import Screen from "./screen/Screen";
import Ava from "./ava/Ava";
import PostContainer from "./post/PostContainer";
import style from "./Mypage.module.css";

const Mypage = (props) =>{
    return (
        <div className = {style.mypage}>
            <Screen/>  
            <Ava/>
            <PostContainer />
        </div>
    );
}

export default Mypage;
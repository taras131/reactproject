import React from "react";
import Screen from "./mypage/Screen";
import Ava from "./mypage/Ava";
import Post from "./mypage/Post";

const Mypage = () =>{
    return (
        <div className = "mypage">
            <Screen/>  
            <Ava/>
            <Post/>
        </div>
    );
}

export default Mypage;
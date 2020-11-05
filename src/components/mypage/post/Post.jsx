import Newpost from "./post_item/newpost/Newpost";
import Post_1 from "./post_item/secondpost/Post_1";
import style from "./Post.module.css";

const Post = (props) =>{

    let postsElements = props.postData.map(item => {
        return <Post_1 name ="Taras" text ={item.text} count ={item.likescount} />
    }); 

    return (
        <div className = {style.post}>
            <h2>Мои сообщения</h2>
            <Newpost addPost = {props.addPost} />
            {postsElements}
        </div> 
    );
}

export default Post;
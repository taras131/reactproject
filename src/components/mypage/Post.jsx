import Newpost from "./post/Newpost";
import Post_1 from "./post/Post_1";
import Post_2 from "./post/Post_2";

const Post = () =>{
    return (
        <div className = "post">
            <h2>Мои сообщения</h2>
            <Newpost/>
            <Post_1/>
            <Post_2/>
        </div> 
    );
}

export default Post;
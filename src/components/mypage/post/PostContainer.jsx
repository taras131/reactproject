import {connect} from "react-redux";
import Post from "./Post"


let mapStateToProps = (state) => {
    return {
    postData: state.profileInformation.postData   
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);


export default PostContainer;
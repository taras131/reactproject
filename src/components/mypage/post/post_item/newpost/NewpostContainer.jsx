import {connect} from "react-redux";
import Newpost from "./Newpost";
import {inputActionCreater ,addPostActionCreater} from "./../../../../../redux/profileReducer";



let mapStateToProps = (state) => {
    return {
    value: state.profileInformation.inputValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        input: (text) => {
            dispatch(inputActionCreater(text));
        }
    }
}

const NewpostContainer = connect(mapStateToProps,mapDispatchToProps)(Newpost);


export default NewpostContainer;
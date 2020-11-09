import {connect} from "react-redux";
import Newmessage from "./Newmessage";
import {postNewMessageActionCreater, inputMessageActionCreater} from "./../../../../redux/messagesReducer";

let mapStateToProps = (state) => {
    return {
    inputValue: state.messagesInformation.inputValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        postNewMessage: () => {
            dispatch(postNewMessageActionCreater());
        },
        input: (body) => {
            dispatch(inputMessageActionCreater(body));
        }
    }
}

const NewmessageContaimer = connect(mapStateToProps,mapDispatchToProps)(Newmessage);



export default NewmessageContaimer;
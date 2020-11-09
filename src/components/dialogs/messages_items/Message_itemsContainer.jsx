import {connect} from "react-redux";
import Message_items from "./Message_items";


let mapStateToProps = (state) => {
    return {
        messagesData: state.messageInformation.messagesData   
    }
}

let mapDispatchToProps = () => {
    return{
        
    }
}

const MessageitemsContainer = connect(mapStateToProps,mapDispatchToProps)(Message_items);


export default MessageitemsContainer;
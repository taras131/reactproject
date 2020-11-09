import {connect} from "react-redux";
import Dialogs_items from "./Dialogs_items";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsInformation.dialogsData   
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

const DialogsitemsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs_items);


export default DialogsitemsContainer;
import style from "./Dialogs.module.css";
import DialogsitemsContainer from "./dialogs_items/Dialogs_itemsContainer";
import MessageitemsContainer from "./messages_items/Message_itemsContainer";

const Dialogs = () => {
    return (
        <div className = {style.dialogs}>
            <DialogsitemsContainer />
            <MessageitemsContainer />
        </div>
    );
}

export default Dialogs;
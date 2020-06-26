import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let messagesElements = props.messages.map( m => <MessageItem message={m.message} id={m.id} key={m.id} /> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>

            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;
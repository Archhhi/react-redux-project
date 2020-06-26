import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.DialogsPage.dialogsData,
        messages: state.DialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
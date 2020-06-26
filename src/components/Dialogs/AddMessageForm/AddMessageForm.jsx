import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageText'} placeholder={'Text message'} component={Textarea}
                       validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogsAddNewMessageForm' })(AddMessageForm);
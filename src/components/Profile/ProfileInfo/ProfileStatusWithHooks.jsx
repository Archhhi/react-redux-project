import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        seteditMode(true);
    }

    const deActivateEditMode = () => {
        seteditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onClick={activateEditMode}>{status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "./ProfileInfo.module.css";
import ok from "../../../assets/images/msg_ok.png";

const ProfileEdit = ({profile, isAuth, saveProfile}) => {

    let [isToggleStyle, setToggleStyle] = useState('none');

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    if (!profile) {
        return <Preloader/>
    }

    let {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, ...rest} = profile;

    return (
        <div className={s.editDataFormBlock}>
            <div className={s.titleEditFormBlock}>
                <span className={s.titleEditForm}>Основное</span>
            </div>

            <div className={style.dropDownMenuHR}/>

            <div className={s.successSave} style={{display: isToggleStyle}}>
                <div className={s.imgOk}>
                    <img src={ok}/>
                </div>

                <div className={s.successText}>
                    <span>Изменения сохранены</span>
                    <br/>
                    <span>Новые данные будут отражены на Вашей странице.</span>
                </div>

                <div className={s.clear}/>
            </div>

            <div className={s.editFormBlock}>
                <Formik
                    initialValues={{
                        fullName: fullName,
                        lookingForAJob: lookingForAJob,
                        lookingForAJobDescription: lookingForAJobDescription,
                        aboutMe: aboutMe,
                        contacts: {
                            facebook: rest.contacts.facebook,
                            website: rest.contacts.website,
                            vk: rest.contacts.vk,
                            twitter: rest.contacts.twitter,
                            instagram: rest.contacts.instagram,
                            youtube: rest.contacts.youtube,
                            github: rest.contacts.github,
                            mainLink: rest.contacts.mainLink
                        }
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.fullName) {
                            errors.fullName = 'Обязательное поле';
                        } else if (values.fullName.length > 20) {
                            errors.fullName = 'Слишком длинное имя';
                        }
                        if (!values.lookingForAJobDescription) {
                            errors.lookingForAJobDescription = 'Обязательное поле';
                        } else if (values.lookingForAJobDescription.length > 150) {
                            errors.lookingForAJobDescription = 'Слишком много навыков';
                        }
                        if (!values.aboutMe) {
                            errors.aboutMe = 'Обязательное поле';
                        } else if (values.aboutMe.length > 500) {
                            errors.aboutMe = 'Слишком длинный текст';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        saveProfile(values);
                        setSubmitting(false);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <div className={s.baseBlock}>
                                <div className={s.itemField}>
                                    <div className={s.itemInputName}>
                                        <label htmlFor='fullName'>Ник:</label>
                                    </div>
                                    <div className={s.itemInput}>
                                        <Field type='text'
                                               name='fullName'
                                               component='input'
                                               id='fullName'
                                        />
                                    </div>
                                    <ErrorMessage
                                        name={'fullName'}
                                        component={'div'}
                                        className={s.errorMessage}
                                    />
                                </div>
                                <div className={s.itemField}>
                                    <div className={s.itemTextareaName}>
                                        <label htmlFor='lookingForAJobDescription'>Профессиональные навыки:</label>
                                    </div>
                                    <div className={s.itemTextarea}>
                                        <Field type='text'
                                               name='lookingForAJobDescription'
                                               component='textarea'
                                               id='lookingForAJobDescription'
                                        />
                                    </div>
                                    <ErrorMessage
                                        name={'lookingForAJobDescription'}
                                        component={'div'}
                                        className={s.errorMessage}
                                    />
                                </div>
                                <div className={s.itemField}>
                                    <div className={s.itemTextareaName}>
                                        <label htmlFor='aboutMe'>Обо мне:</label>
                                    </div>
                                    <div className={s.itemTextarea}>
                                        <Field type='text'
                                               name='aboutMe'
                                               component='textarea'
                                               id='aboutMe'
                                        />
                                    </div>
                                    <ErrorMessage
                                        name={'aboutMe'}
                                        component={'div'}
                                        className={s.errorMessage}
                                    />
                                </div>
                                <div className={s.itemField}>
                                    <div className={s.itemInputName}>
                                        <label htmlFor='lookingForAJob'>Ищу работу:</label>
                                    </div>
                                    <div className={s.itemInput + ' ' + s.checkbox}>
                                        <Field type='checkbox'
                                               name='lookingForAJob'
                                               component='input'
                                               id='lookingForAJob'
                                        />
                                    </div>
                                    <ErrorMessage
                                        name={'lookingForAJob'}
                                        component={'div'}
                                        className={s.errorMessage}
                                    />
                                </div>
                            </div>

                            <div className={style.dropDownMenuHR}/>

                            <div className={s.contactsBlock}>
                                <div className={s.contactsTitleBlock}>
                                    <span className={s.contactsTitle}>Контакты</span>
                                </div>
                                {Object.keys(profile.contacts).map(key => {
                                    return (
                                        <div className={s.itemField} key={key}>
                                            <div className={s.itemInputName}>
                                                <label htmlFor={'contacts.' + (key)}> {key}:</label>
                                            </div>
                                            <div className={s.itemInput}>
                                                <Field type='text'
                                                       name={'contacts.' + (key)}
                                                       component='input'
                                                       id={'contacts.' + (key)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className={style.dropDownMenuHR}/>

                            <div>
                                <button type='submit'
                                        disabled={isSubmitting}
                                        className={s.saveInfoButton}
                                        onClick={() => setToggleStyle('flex')}
                                >
                                    Сохранить
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ProfileEdit;
import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, Form, reduxForm } from "redux-form";
import { Textarea } from "../common/formsControl/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

function Dialogs(props) {
  let dialogsElement = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let messagesElement = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id}/>
  ));

  const onSubmit = (formData) => {
    console.log(formData.messageText);
    props.addMessage(formData.messageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <SendMessageReduxForm onSubmit={onSubmit} />
    </div>
  );
}

function SendMessageForm(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className={s.textAria}>
        <Field
          component={Textarea}
          name="messageText"
          placeholder="enter your message..."
          validate={[required, maxLength100]}
        />
        <button className={s.button}>send</button>
      </div>
    </Form>
  );
}

const SendMessageReduxForm = reduxForm({
  form: "message",
})(SendMessageForm);

export default Dialogs;

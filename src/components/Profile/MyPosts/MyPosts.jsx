import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControl/FormsControls";

const maxLength = maxLengthCreator(300);

function MyPosts(props) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} key={p.id} />
  ));

  const onSubmit = (formData) => {
    console.log(formData);
    props.addPost(formData.postText);
  };

  return (
    <div className={s.postBlock}>
      my posts
      <AddPostReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {postsElements}
        {/*<Post message="Hi, How are you?" likes="15" />*/}
        {/*<Post message="This is my first post!" likes="20" />*/}
      </div>
    </div>
  );
}

function AddPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="postText"
          component={Textarea}
          placeholder="enter your post..."
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddPostReduxForm = reduxForm({
  form: "postText",
})(AddPostForm);

export default MyPosts;

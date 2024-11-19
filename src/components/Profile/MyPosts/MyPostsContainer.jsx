import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";

function mapStateToProps(state) {
  return {
    posts: state.profilePage.posts,
    value: state.profilePage.newPostText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

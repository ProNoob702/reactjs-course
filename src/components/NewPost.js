import { useState } from "react";
import "../styles/NewPost.css";
import uniqid from "uniqid";

export const NewPostComponent = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postId = uniqid();
    const newPost = {
      id: postId,
      title: titleValue,
      description: descriptionValue,
    };
    props.setPosts((prevState) => {
      const newArr = [...prevState, newPost];
      return newArr;
    });
    // do reset
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <div className="newPost">
      <h4 className="newPost__title">Add new post</h4>
      <form onSubmit={handleSubmit}>
        <div className="newPost__control">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={titleValue}
            onChange={handleTitleChange}
          />
        </div>
        <div className="newPost__control">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={descriptionValue}
            rows={2}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="newPost__actions">
          <button type="submit">Add post</button>
        </div>
      </form>
    </div>
  );
};

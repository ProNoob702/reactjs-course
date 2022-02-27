import { useState } from "react";
import "../styles/Post.css";

export const PostComponent = (props) => {
  const [title, setTitle] = useState("ReactJS lesson");
  const handleClick = () => {
    setTitle("Updated !!");
  };
  return (
    <div className="UserPost">
      <div className="UserPost__content">
        <h3 className="UserPost__Title">{title}</h3>
        <p className="UserPost__Description">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </p>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </div>
  );
};

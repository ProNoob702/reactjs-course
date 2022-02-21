import "../styles/Post.css";

export const PostComponent = (props) => {
  return (
    <div className="UserPost">
      <h3 className="UserPost__Title">ReactJS lesson</h3>
      <p className="UserPost__Description">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
      </p>
    </div>
  );
};

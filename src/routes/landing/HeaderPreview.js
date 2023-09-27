import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">
          <span className="name-font">W</span>ilfred <span className="name-font">B</span>ridges
        </em>
        <br></br>web developer
      </h1>
      <p className="gray-text p-tag">Full Stack Developer</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;

import { Link } from "react-router-dom";
const Work = (props) => {
  return (
    <Link to={props.linkOnRouter} className="project">
      <h2 className="project__title">{props.title}</h2>
      <img className="project__img" src={props.img} />
      <h3 className="project__title">{props.skills}</h3>
    </Link>
  );
};

export default Work;

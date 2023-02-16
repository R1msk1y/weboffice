import Gitbtn from '../components/gitbtn/Gitbtn';
import projectOneImg from './../img/projects/01-big.jpg';
const SeparateProject = () => {
    return ( <main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">Video service</h1>

            <img src={projectOneImg} alt="" className="project-details__cover"/>

            <div className="project-details__desc">
                <p>Skills: React, Node.js, MongoDB</p>
            </div>

          <Gitbtn/>

        </div>
    </div>
</main> );
}
 
export default SeparateProject;
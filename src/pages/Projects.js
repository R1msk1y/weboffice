import Work from '../components/work/Work';
import {data} from './../helpers/projectList';

const Projects = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {data.map((onceProject, index)=>{

                    return (<Work key={index} title={onceProject.title} img={onceProject.img}/>);

                })};
    

            </ul>
        </div>
    </main>
     );
}
 
export default Projects;
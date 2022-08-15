import ProjectCard from './ProjectCard'

const Projects = ({projects}) => {

    return (
        <div className="text-center max-w-7xl mx-auto px-6 lg:px-10 mt-20">
            <p className="font-bold">Projects</p>
            <h2 className="text-3xl font-extrabold text-secondary">
                Discover the latest Interior Design <br /> available today
            </h2>

            <div className="grid lg:grid-cols-3 my-20">
                {projects?.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects

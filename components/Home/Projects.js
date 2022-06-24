import Image from 'next/image'
import mapIcon from '../../assets/Icon/Group 33011.png'
import img1 from '../../assets/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png'
import img3 from '../../assets/Image/Mask Group-1.png'
import img2 from '../../assets/Image/Mask Group.png'

const Projects = () => {
    const projectDetails = [
        {
            id: 1,
            name: 'Villa on Washington Avenue',
            location: 'Dhaka, Bangladesh',
            img: img1
        },
        {
            id: 2,
            name: 'Luxury villa in Rego Park',
            location: 'Dhaka, Bangladesh',
            img: img2
        },
        {
            id: 3,
            name: 'Gorgeous house',
            location: 'Dhaka, Bangladesh',
            img: img3
        }
    ]

    return (
        <div className="text-center max-w-7xl mx-auto px-6 lg:px-10 mt-20">
            <p className="font-bold">Projects</p>
            <h2 className="text-3xl font-extrabold text-secondary">
                Discover the latest Interior Design <br /> available today
            </h2>

            <div className="grid grid-cols-3 my-20">
                {projectDetails.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    const { name, location, img } = project
    return (
        <div className="card">
            <figure>
                <Image src={img} alt="Project" width="360" height="400" className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="flex items-center justify-center gap-2">
                    <Image src={mapIcon} alt="Location" width="18" height="18" />
                    <span>{location}</span>
                </p>
            </div>
        </div>
    )
}

export default Projects

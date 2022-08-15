import Image from 'next/image'
import mapIcon from '../../assets/Icon/Group 33011.png'

const ProjectCard = ({ project }) => {
    const { name, location, img } = project

    return (
        <div className="card">
            <img src={img} alt={name} width="360" className="rounded-lg" style={{height: '400px'}} />
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
export default ProjectCard

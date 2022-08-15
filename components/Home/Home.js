import Contact from './Contact'
import LandingUi from './LandingUi'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = ({projects}) => {

    return (
        <>
            <LandingUi />
            <Projects projects={projects} />
            <Services />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home

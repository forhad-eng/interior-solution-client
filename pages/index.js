import axios from 'axios'
import LandingPage from '../components/Home/Home'
import Meta from '../components/Shared/Meta'

export default function Home({projects}) {
    return (
        <div>
            <Meta title="Interior Solution - Home" />

            <main>
                <LandingPage projects={projects} />
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const {data: projects} = await axios.get('http://localhost:5000/services')

    return {
        props: {
            projects
        }
    }
}

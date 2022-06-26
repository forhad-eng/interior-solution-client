import { Toaster } from 'react-hot-toast'
import Layout from '../components/Shared/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}

export default MyApp

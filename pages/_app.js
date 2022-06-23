import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <Component {...pageProps} />
                </div>
            </Layout>
        </>
    )
}

export default MyApp

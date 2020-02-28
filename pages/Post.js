import { useRouter } from 'next/router'
import Layout from '../comps/MyLayout'


function Content() {
    const router = useRouter()

    console.log(router)

    return (
        <>
            <h1>{ router.query.title }</h1>
            <p>This is where the content would go</p>
        </>
    )
}


export default function page() {
    return (
        <Layout>
            <Content />
        </Layout>
    )
}
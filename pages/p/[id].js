import { useRouter } from 'next/router'
import Layout from "../../comps/MyLayout"
import fetch from "isomorphic-unfetch"


const Post = props => {
    // how to get data from url
    const router = useRouter();

    console.log(router)

    return (
        <Layout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary}</p>
        </Layout>
    )
}

Post.getInitialProps = async function(context){

    const id = context.query.id

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = await res.json()

    console.log(data)
    return {show: data}
}

export default Post;
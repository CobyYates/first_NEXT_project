import Layout from "../comps/MyLayout"
import fetch from "isomorphic-unfetch"
import Link from "next/link"

const PostLink = props => (
    <li>
        <Link href='/p/[id]' as={`/p/${props.id}`}>
            <a>{props.name}</a>
        </Link>
        test
    </li>
)

const Index = props => {
    // console.log(props)
    return (
        <Layout>
            <ul>
                {props.shows.map(show => {
                    console.log(show);
                    <PostLink id={show.id} key={show.id} name={show.name} />
                })}
            </ul>
        </Layout>
    )
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const res = await fetch('https://uinames.com/api/')
    

    const data = await res.json()
    // console.log(data)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index;
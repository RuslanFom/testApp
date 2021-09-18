import Login from "./login";
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Test App</title>
            </Head>
            <main>
                <Login/>
            </main>
            <footer>
            </footer>
        </div>
    )
}

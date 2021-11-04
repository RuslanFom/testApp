import Link from "next/link"


export const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link href={'/barChart'}><a>Gender/Age/Quantity</a></Link>
                <Link href={'/barChartDateActivity'}><a>Data/Activity</a></Link>
                <Link href={'/'}><a>Back to Login</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
              nav {
                position: fixed;
                height: 80px;
                left: 0;
                top: 0;
                right: 0;
                background: antiquewhite;
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: x-large;
              }
              
              nav a {
              color: #000000;
              text-decoration: none;
              }
            `}</style>
        </>
    )
}
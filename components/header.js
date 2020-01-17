import Link from 'next/link'

const Header = () => (
    <div id="Hlayout">
        <div id="logo">
            <h1>Young_NEXT</h1>
        </div>
        <div id="menu">
            <Link href="/art"><a>Art</a></Link>
            <div id="hidden">a</div>
            <span>|</span>
            <div id="hidden">a</div>
            <Link href="/about"><a>About</a></Link>
            <div id="hidden">a</div>
            <span>|</span>
            <div id="hidden">a</div>
            <Link href="/tech"><a>Tech</a></Link>
        </div>
        <style jsx>{`
            #Hlayout {
                width:90%;
                height:10%;
                display: inline-flex;
                background: linear-gradient(135deg, #010105 80%, #FDFDFF);
                align-items: center;
                padding: 0 5%;
                justify-content: space-between;
                box-shadow: -2px 2px 2px #010105;
                z-index: 100;
            }
            #hidden {
                visibility: hidden;
                color: white;
            }
            #logo {
                color: #FDFDFF;
                cursor: default;
            }
            #menu {
                display: flex;
                margin: 5%;
            }
            span, a {
                text-decoration: none;
                color: #FDFDFF;
            }
            a:hover {
                color: rgb(255, 255, 39);
            }
        `}</style>
    </div>
)

export default Header;
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href={`/viewer?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration: none;
                color: black;
            }
        `}</style>
    </li>
  );

export default function Writing() {
    return(
    <div>
        <ul id = "menu">
            <li><a>VR</a>
                <ul id="inner">
                    <li><PostLink title="Don't Steal Zzz.." /></li>
                </ul>
            </li>
            <li><a>Computer</a>
                <ul id="inner">
                    <li><PostLink title="Artech CC Simulation" /></li>
                    <li><PostLink title="Alive!" /></li>
                    <li><PostLink title="말이 많아!" /></li>
                </ul>
            </li>
            <li><a>Mobile</a>
                <ul id="inner">
                    <li><PostLink title="Rainman" /></li>
                </ul>
            </li>
        </ul>
        <style jsx>{`
            #menu {
                list-style: none;
                cursor: default;
            }
            #menu ul li{
                display: none;
                list-style: none;  
            }
            #menu li:hover ul li{    
                display: block;
            }
            li {
                border-bottom: 1px dotted rgba(17, 17, 17, .3);
                background: rgba(150,150,150,0.1);
                padding: 4%;
            }
            #inner li:hover {
                opacity: 0.6;
            }

        `}</style>
    </div>
    )
}
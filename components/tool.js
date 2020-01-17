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

export default function Tool() {
    return(
    <div>
        <ul id = "menu">
            <li><PostLink title="Sound Like Dot" /></li>
            <li><PostLink title="Air Note" /></li>
        </ul>
        <style jsx>{`
            #menu {
                list-style: none;
            }
            li {
                border-bottom: 1px dotted rgba(17, 17, 17, .3);
                background: rgba(150,150,150,0.1);
                padding: 4%;
            }
            li:hover {
                opacity: 0.6;
            }

        `}</style>
    </div>
    )
}
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
            <li><a>평론</a>
                <ul id="inner">
                    <li><PostLink title="아쿠타가와 류노스케 : <지옥변>" /></li>
                    <li><PostLink title="나츠메 소세키 : <마음>" /></li>
                    <li><PostLink title="오에 겐자부로 : <사육>" /></li>
                    <li><PostLink title="호소다 마모루 : <시간을 달리는 소녀>" /></li>
                </ul>
            </li>
            <li><a>소설</a>
                <ul>
                    <li id="inner"><PostLink title="준비중.." /></li>
                </ul>
            </li>
            <li><a>에세이</a>
                <ul>
                    <li id="inner"><PostLink title="천황제 이데올로기와 무사도" /></li>
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
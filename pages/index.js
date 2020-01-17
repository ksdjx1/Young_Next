import Head from 'next/head'

function IndexPage() {
  return (
    <div id="Inlayout">
        <Head>
            <meta httpEquiv="refresh" content="3; url=http://localhost:3000/about" />
        </Head>
        <div id="start">
            <p>"YeongJin"</p>
        </div>
        <style jsx>{`
            #Inlayout {
                height: 100%;
            }
            #start {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: move 3.8s;
                font-size: 10em;
                font-family: 'Permanent Marker';
            }
            @keyframes move {
                0% {
                    top: 50%;
                    opacity: 0;
                }
                50% {
                    top: 50%;
                }
                100% {
                    opacity: 1;
                    top: -125px;
                }

            }
        `}</style>
    </div>
  )
}

export default IndexPage
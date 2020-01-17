const Footer = () => (
    <div id="Flayout">
        <div id="foot">
            <p>CONTACT : ksdjx1@naver.com</p>
            <p>© YeongJin Kang 2019 All Rights Reserved</p>
        </div>
        <style jsx>{`
            #Flayout {
                height: 12%;
                z-index: 100;
                background: #FDFDFF;
            }
            #foot {
                border-top: 2px solid black;
                margin: 0 4% 0 4%;
                text-align: right;
            }
            p {
                margin: 1%;
            }
        `}</style>
    </div>
)

export default Footer
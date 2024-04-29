import Header from "./Header";
export default function Internships(){
    return(<>
    <div className="home">
    <Header />
        <div className="allinterns">
            <div className="interns">
                <div>
                <h1>Oasis InfoByte</h1>
                <h2><b>Role:</b>Web Developer</h2>
                <h3><b>Duration:</b>1 Month</h3>
                </div>
                <div>
                <img src="oasis.jpeg" />
                </div>
            </div>
            <div className="interns">
            <div>
                <h1>Bharat Intern</h1>
                <h2><b>Role:</b>Web Developer</h2>
                <h3><b>Duration:</b>1 Month</h3>
                </div>
                <div>
                <img src="bharatintern.jpeg" />
                </div>
            </div>
            <div className="interns">
            <div>
                <h1>AICTE</h1>
                <h2><b>Role:</b>AIML</h2>
                <h3><b>Duration:</b>3 Month</h3>
                </div>
                <div>
                <img src="Aicte.jpeg" />
                </div>
            </div>
            </div>
            </div>
    </>)
}
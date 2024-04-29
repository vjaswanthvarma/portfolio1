import Header from "./Header"
export default function Education(){
   return (
    <>
    <div className="home">
    <Header />
    <div className="colleges">
        <div className="col1">
            <h1>Vishnu Institute of Technology</h1>
            <h2><b>Branch:</b>Computer Science and Engineering</h2>
            <h3><b>Location:</b>Bhimavaram</h3>
            <span><b>CGPA:</b>9.16</span>
            </div>
            <div className="col2">
            <h1>Aditya Junior College</h1>
            <h2><b>Branch:</b>MPC</h2>
            <h3><b>Location:</b>Tadepalligudem</h3>
            <span><b>Percentage:</b>94.6</span>
            </div>
            <div className="col3">
            <h1>Pippara Techno School</h1>
            <h2><b>Branch:</b>SSC</h2>
            <h3><b>Location:</b>Pippara</h3>
            <span><b>GPA:</b>9.8</span>
            </div>

    </div>
    </div>
    </>
   )
}
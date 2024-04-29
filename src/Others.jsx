import Header from "./Header"
export default function Others(){
    return(<>
    <div className="Others">
        <Header />
        <div>
        <div className="certificates">
                <h1>Certificates</h1>
            <ol>
                <li>Full Stack Webdevelopment from UDEMY</li>
                <li>Full Stack Webdevelopment from CONDIZA</li>
                <li>Advanced  Java from CodeChef</li>
            </ol>
        </div>
        <div className="Achivements">
        <h1>Achivements</h1>
        <ol>
            <li><b>Leetcode:</b>300+ Problems are Solved</li>
            <li><b>GreekForGeeks:</b>110+ Problems are Solved</li>
            <li><b>CodeChef:</b>2 Star Rating</li>
            <li><b>CodeStudio:</b>150+ Problems are Solved</li>

        </ol>
        </div>
        <div className="Publications">
        <h1>Publications</h1>
            <h2>’Optimizing Real Estate Prediction’ at IC4S 2023</h2>
             <a href="https://link.springer.com/chapter/10.1007/978-3-031-48888-7_12">Click Here-></a>
            </div>
            </div>
            </div>
    </>)
}
import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-7">
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">About</h1>
                        <p>
                        Welcome to my portfolio page where I showcase some of my work I have done. I am currently taking part in a 24-week full-stack bootcamp through Michigan State University. I look forward to absorbing everything I can about web-development.
                        </p>
                        <p>
                        My ultimate goal is to help solve the unemployment issues faced by many African countries by teaching young Africans how to code. Once they are well-versed in coding, I will work to link them up with American and European countries searching for programmers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

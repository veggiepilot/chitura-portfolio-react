import timedQuiz from "./timed-quiz.png";
import passwordGenerator from "./password-generator.png";
import workScheduler from "./work-scheduler.png";
import covidTracker from "./covid-tracker.png";
import gcaDashboard from "./gca-dashboard.png";
import weatherApp from "./weather-app.png";

function Project() {
    return (
        <div className="project">
            <div className="container">
                <div className="row align-items-center my-7">
                    <div className="col-lg-7">
                    <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Timed Quiz</h3>
                            <p>In this project, I designed a timed coding quiz challenge. I used bootstrap, html and javascript to accomplish the requirements needed.</p>
                            <a href="https://veggiepilot.github.io/code-quiz/"></a>
                        </div>
                        <div className="showcase-right-img">
                            <a href="https://veggiepilot.github.io/code-quiz/">
                                <img src={timedQuiz} alt="Screenshot of timed quiz" />
                            </a>
                        </div>
                    </section>

                    <section className="showcase-left">
                        <div className="showcase-left-text">
                            <h3>Day Planner</h3>
                            <p>In this project, I designed a work day schedule that presents timeblocks for standard business hours. Each timeblock is color coded to indicate whether it is in the past, present or future. The client can enter tasks in a timeblock and save the data.</p>
                        </div>
                        <div className="showcase-left-img">
                            <a href="https://veggiepilot.github.io/work-day-scheduler/">
                                <img src={workScheduler} alt="Screenshot of work scheduler webpage"/>
                            </a>
                        </div>
                    </section>

                        <section className="showcase-right">
                            <div className="showcase-right-text">
                                <h3>Password Generator</h3>
                                <p>This project showcases a password generator that lets the user generate a password given certain specifications.</p>
                            </div>
                            <div className="showcase-right-img">
                                <a href="https://veggiepilot.github.io/password-generator/">
                                    <img src={passwordGenerator} alt="Screenshot of password generator webpage"/>
                                </a>
                            </div>
                        </section>

                        <section className="showcase-left">
                            <div className="showcase-left-text">
                                <h3>COVID Tracker</h3>
                                <p>This project showcases a Covid Tracker website I created with two friends. It tracks covid-19 relevant data.</p>
                            </div>
                            <div className="showcase-left-img">
                                <a href="https://maxaeon.github.io/covid/">
                                    <img src={covidTracker} alt="Screenshot of covid tracker website"/>
                                </a>
                            </div>
                        </section>

                        <section className="showcase-right">
                            <div className="showcase-right-text">
                                <h3>GCA Donor Dashboard</h3>
                                <p>This project was created for the administrators at a private Christian high school. The dashboard tracks financial donors who support students who need financial assistance that attend the school. The application is able to track the donors, how much and who they donate to.</p>
                            </div>
                            <div className="showcase-right-img">
                                <a href="https://cryptic-ridge-10235.herokuapp.com/">
                                    <img src={gcaDashboard} alt="Screenshot of password GCA Dashboard webpage"/>
                                </a>
                            </div>
                        </section>

                        <section className="showcase-left">
                            <div className="showcase-left-text">
                                <h3>Weather App</h3>
                                <p>This application is a weather app that shows current and 5-day weather forecast for a given city.</p>
                            </div>
                            <div className="showcase-left-img">
                                <a href="https://veggiepilot.github.io/weather-dashboard/">
                                    <img src={weatherApp} alt="Screenshot of Weather App"/>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Project

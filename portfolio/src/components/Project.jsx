function Project() {
    return (
        <div className="project">
            <div class="container">
                <div class="row align-items-center my-7">
                    <div class="col-lg-7">
                    <h1>Projects</h1>
                    <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Timed Quiz</h3>
                            <p>In this project, I designed a timed coding quiz challenge. I used bootstrap, html and javascript to accomplish the requirements needed.</p>
                            <a href="https://veggiepilot.github.io/code-quiz/"></a>
                        </div>
                        <div className="showcase-right-img">
                            <a href="https://veggiepilot.github.io/code-quiz/">
                                <img src="assets/images/timed-quiz.png" alt="Screenshot of timed quiz" />
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
                                <img src="assets/images/work-scheduler.png" alt="Screenshot of work scheduler webpage"/>
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
                                    <img src="assets/images/password-generator.png" alt="Screenshot of password generator webpage"/>
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
                                    <img src="assets/images/covid-tracker.png" alt="Screenshot of covid tracker website"/>
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

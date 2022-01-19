function Sidebar() {
    return (
        <div className="side-bar">
            <img src="https://avatars.githubusercontent.com/u/54517826?s=400&u=e120f7d110e8be7d43d9fc637e8d731df0f492e3&v=4" alt="" />
            <div className="sidebar-text">
                <p>JOHANNES CHITURA</p>
                <p>FULL-STACK WEB DEVELOPER</p>
            </div>
            <div className="contact-icons">
                <p>GET IN TOUCH</p>
                <a href="mailto:johanneschitura@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/johanneschitura/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/veggiepilot"><i className="fab fa-github"></i></a>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="assets/docs/resume.pdf" target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>     
        </div>
    )
}

export default Sidebar;
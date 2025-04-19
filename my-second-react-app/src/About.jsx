import React from "react";
function About(){
    return(
        <section id="About" className="hero-section">
            <div className="hero-content">
                <div className="text-card">
                    <p className="label">🌐 ABOUT ME</p>
                    <h1>hey, I'm Kenny 👋</h1>
                    <p>I'm a student passionate about building cool web projects and learning full-stack development.</p>

                    <div className="mission-card">
                        <p className="label">🚀 MY MISSION</p>
                        <p>
                        I want to build websites that are clean, useful, and fun to use — combining creativity with functionality.
                        <br />
                        <em>Keep improving, don’t stop. 💪</em>
                        </p>
                    </div>
                </div>

                <img src="/assets/your-photo.jpg" alt="Kenny Leung" className="hero-img" />
            </div>
        </section>
    );

}

export default About;
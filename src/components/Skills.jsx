import './../App.css'

export default function Skills () {
    return (
              <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column" id="tecno">
              {/* <div className="text">Software Engineering</div> */}
              <div className="text">Frontend & Web</div>
              <div>
                <i className="fa-brands fa-react"></i>
                <span>React.js / Next.js</span>
              </div>

              <div>
                <i className="fab fa-js-square"></i>
                <span>JavaScript / TypeScript</span>
              </div>

              <div>
                <i className="fa-brands fa-node-js"></i>
                <span>Node.js</span>
              </div>

              <div>
                <i className="fas fa-database"></i>
                <span>SQL / Supabase</span>
              </div>

              <div>
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>

              <div>
                <i className="fa-brands fa-html5"></i>
                <span>HTML5 / CSS3</span>
              </div>

              <div>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>AI-assisted coding</span>
              </div>
            </div>

            <div className="column">
              <div className="text">Business Apps & Automation</div>

              <div>
                <i className="fa-brands fa-windows"></i>
                <span>Power Apps</span>
              </div>

              <div>
                <i className="fa-brands fa-windows"></i>
                <span>Power Automate</span>
              </div>

              <div>
                <i className="fa-brands fa-windows"></i>
                <span>Copilot Studio</span>
              </div>

              <div>
                <i className="fa-brands fa-windows"></i>
                <span>SharePoint</span>
              </div>
            </div>

            <div className="column">
              <div className="text">Languages:</div>
              <div>
                <div>
                  <i className="fas fa-globe-europe"></i>
                  <span className="lang">English:</span> <span>Bilingual (C2)</span>
                </div>

                <div>
                  <i className="fas fa-globe-americas"></i>
                  <span className="lang">Spanish:</span> <span>Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
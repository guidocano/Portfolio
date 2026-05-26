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
                <span>SQL</span>
              </div>

              <div>
                <i className="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>

              <div>
                <i className="fa-brands fa-html5"></i>
                <span>HTML5 / CSS3</span>
              </div>
            </div>

            <div className="column">
              <div className="text">Business Applications & Cloud</div>

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
                  <span id="lang"> English: Bilingual</span>
                </div>

                <div>
                  <i className="fas fa-globe-americas"></i>
                  <span id="lang"> Spanish:</span> <span> Native</span>
                </div>

                <br />
                <div className="text">Soft Skills:</div>
                <div>
                  <div>
                    <i className="fas fa-toolbox"></i>
                    <span> Problem-Solving</span>
                  </div>

                  <div>
                    <i className="fa-solid fa-chart-column"></i>
                    <span>&ensp;Analytical Thinking</span>
                  </div>

                  <div>
                    <i className="fas fa-users"></i>
                    <span>Agile Teamwork</span>
                  </div>

                  <div>
                    <i className="fa-solid fa-code-compare"></i>
                    <span>Adaptability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
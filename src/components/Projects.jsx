import "./../App.css";

export default function Projects() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content">

          <div className="card">
            <a
              href="https://amazon.guidodev.com.ar/"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <div className="box">
                <i class="fa-brands fa-amazon"></i>
                <div className="text">E-Commerce Platform</div>
                <p>Full-stack CRUD application built with React and Node.js.</p>
                <p>Hosted on AWS.</p>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="https://guidocano.github.io/movies/"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <div className="box">
                <i className="fa-solid fa-ticket"></i>
                <div className="text">Movie Tracker</div>
                <p>
                  React app featuring secure authentication, movie search, and user favorites.
                </p>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="https://guidocano.github.io/google-clone/"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <div className="box">
                <i className="fa-brands fa-google"></i>
                <div className="text">Global Search Engine</div>
                <p>
                  React interface integrating Google, YouTube, and Image REST APIs in a single site.
                </p>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="https://guidocano.github.io/take-note/"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <div className="box">
                <i className="take-note fa-solid fa-note-sticky"></i>
                <div className="text">Sticky Notes App</div>
                <p>
                 React interactive productivity tool with full CRUD operations, filtering, and archiving.
                </p>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              target="_blank"
              href="https://guidocano.github.io/RTS.js/"
              className="hyper"
            >
              <div className="box">
                <i className="fas fa-road"></i>
                <div className="text">Text Adventure Engine</div>
                <p>
                  Interactive game developed with Javascript. Play it!
                </p>
                <br/>
              </div>
            </a>
          </div>

          <div className="card">
            <a
              href="https://github.com/guidocano"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Other Projects!</div>
                <p>Go to Github.</p>
                <br/>
                <p>&ensp;</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

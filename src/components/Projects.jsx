import "./../App.css";

export default function Projects() {
    return(
        
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="serv-content">
            <div className="card">
              <a
                href="https://guidocano.github.io/movies/"
                target="_blank"
                rel="noreferrer"
                className="hyper"
              >
                <div className="box">
                  <i className="fa-solid fa-ticket"></i>
                  <div className="text">Cinema Website</div>
                  <p>
                    Register and login, movie search, add to favs. React{" "}
                    <i className="fa-brands fa-react icon-small"></i>
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
                  <div className="text">Google Clone</div>
                  <p>
                    Search engine layout with Google, Youtube and Img API. React{" "}
                    <i className="fa-brands fa-react icon-small"></i>
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
                  <div className="text">Take Note!</div>
                  <p>
                    Write, edit and delete your notes. Filter and archive. React{" "}
                    <i className="fa-brands fa-react icon-small"></i>
                  </p>
                </div>
              </a>
            </div>

            <div className="card">
              <a
                href="https://guidocano.github.io/travel-photo-album/"
                target="_blank"
                rel="noreferrer"
                className="hyper"
              >
                <div className="box">
                  <i className="fa-solid fa-panorama"></i>
                  <div className="text">Travel Photo Album</div>
                  <p>Travel and Photography Website.</p>
                  <p>HTML5, CSS, JS and Bootstrap.</p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="rts.html" className="hyper">
                <div className="box">
                  <i className="fas fa-road"></i>
                  <div className="text">Road Trip Simulator</div>
                  <p>
                    Text-based adventure game developed with Python.{" "}
                    <b>Play it!</b>
                  </p>
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
                  <p>&ensp;</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}
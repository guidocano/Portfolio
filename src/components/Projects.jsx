import "./../App.css";

export default function Projects() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content">

          <div className="card">
            <a
              href="https://sellando.com.ar"
              target="_blank"
              rel="noreferrer"
              className="hyper"
            >
              <span className="badge">Latest</span>
              <div className="box">
                <i className="fa-solid fa-plane-departure"></i>
                <div className="text">Stampit</div>
                <p>
                  Travel social network to collect passport stamps of the places you visit. Built with Next.js and Supabase.
                </p>
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
                <i className="fa-solid fa-film"></i>
                <div className="text">Movie Tracker</div>
                <p>
                  React app to search movies, browse upcoming releases and save favorites.
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
                <i className="fa-solid fa-magnifying-glass"></i>
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
                  React productivity tool with full CRUD operations, filtering, and archiving.
                </p>
              </div>
            </a>
          </div>
        </div>

        <p className="more-projects">
          <a href="https://github.com/guidocano" target="_blank" rel="noreferrer">
            More on GitHub <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </section>
  );
}

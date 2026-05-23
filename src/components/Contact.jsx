import './../App.css'

export default function Contact() {
    return (
              <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact info</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                You can find me on any of the following networks. Contact me for
                any question!
              </p>
              <br />
              <div className="icons">
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">&ensp;CABA</div>
                    <div className="sub-title">
                      &ensp;Buenos Aires, Argentina.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <a className="head" href="mailto:guidocalciano@gmail.com"><i className="fas fa-envelope"/></a>
                  <div className="info">
                    <a className="head" href="mailto:guidocalciano@gmail.com">
                      guidocalciano@gmail.com
                    </a>
                    <div className="sub-title">E-mail.</div>
                  </div>
                </div>

                <div className="row">
                  <a target="_blank" href="https://github.com/guidocano"><i className="fab fa-github" /></a>
                  <div className="info">
                    <div className="head">
                      <a target="_blank" href="https://github.com/guidocano">/guidocano</a>
                    </div>
                    <div className="sub-title">Github.</div>
                  </div>

                </div>


                <div className="row">
                  <a target="_blank" href="https://www.linkedin.com/in/guidocalciano/"><i className="fab fa-linkedin"/></a>
                  <div className="info">
                    <div className="head">
                      <a target="_blank" href="https://www.linkedin.com/in/guidocalciano/">
                        /guidocalciano
                      </a>
                    </div>
                    <div className="sub-title">Linkedin.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
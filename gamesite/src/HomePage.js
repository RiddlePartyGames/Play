function HomePage() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container px-4 px-lg-5">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
asdasdalskd laksdjl asjdlaksjd laksjd laksj dlsa

<video autoPlay loop muted>
        <source src="./game.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video autoPlay loop muted>
  <source src="%PUBLIC_URL%/game.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">CodeBreaker Games</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">Escape reality. Enter the game room.</h2>
              <a className="btn btn-primary" href="#about">Get Started</a>
            </div>
          </div>
        </div>
      </header>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Why Choose Our Games?</h2>
              <div className="text-white-50">
                <h2>Print and Play</h2>
                <p>Recreate real-life escape rooms in your own home.</p>
              </div>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="text-white-50">
              <h2>Immersive Themes</h2>
              <p>Become lost in incredible, stirring narratives.</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="text-white-50">
              <h2>Modern Design, Timeless Thrills</h2>
              <p>Our games seamlessly blend modern aesthetics with timeless excitement. Engage with sleek, contemporary designs while unraveling mysteries and solving puzzles that challenge your intellect.</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="text-white-50">
              <h2>Perfect for All Occasions</h2>
              <p>From family gatherings to corporate events, our escape rooms offer a unique and memorable experience. Foster teamwork, communication, and problem-solving skills while enjoying the excitement of our tech-driven puzzles. gb</p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">

      GAMES
      </section>
      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
            <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
            <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;


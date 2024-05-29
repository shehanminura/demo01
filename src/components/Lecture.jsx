import reactIcon from "../assets/react.svg";
import r from "../assets/721070bd277379802d3d0d1020e45ab4.jpg";

export default function Lecture() {
  return (
    <div className="contaner">
      <div className="b-example-divider"></div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-10 col-sm-8 col-lg-6" data-aos='fade-right'> 
            <img
              src={r}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6" data-aos='fade-left'>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 ">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

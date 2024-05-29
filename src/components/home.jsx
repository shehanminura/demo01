import reactIcon from "../assets/react.svg";
import r from "../assets/Black Yellow Gym Fitness Center Banner Landscape (1).png";
import week from "../assets/abd6bccf0bae0ffd2be809c93d9e9998.jpg";
import app from "../assets/Colorful Planner Mobile App Promotion Instagram Post (1).jpg";

export default function Home() {
  return (
    <div>
      <div>
      <img src={r} width='100%' height='50%'></img>
      </div>
    <div className="contaner">
      <div className="b-example-divider"></div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-10 col-sm-8 col-lg-6" data-aos='fade-right'> 
            <img
              src={week}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6" data-aos='fade-left'>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 ">
            4 WEEK WORKOUT PLAN
            </h1>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
             Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-dark btn-lg px-4 me-md-2"
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
      <div>
      <h1 class="visually-hidden">Heroes examples</h1>
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={reactIcon}alt="" width="72" height="57"/>
    <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-dark btn-lg px-4 gap-3 fw-bold">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>
      </div>
      <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Border hero with cropped image and shadows</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={app} alt="" width="720"/>
          
      </div>
    </div>
  </div>
    </div>
    <div>
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
        <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Cool stuff</a></li>
          <li><a class="text-muted" href="#">Random feature</a></li>
          <li><a class="text-muted" href="#">Team feature</a></li>
          <li><a class="text-muted" href="#">Stuff for developers</a></li>
          <li><a class="text-muted" href="#">Another one</a></li>
          <li><a class="text-muted" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Resource</a></li>
          <li><a class="text-muted" href="#">Resource name</a></li>
          <li><a class="text-muted" href="#">Another resource</a></li>
          <li><a class="text-muted" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Team</a></li>
          <li><a class="text-muted" href="#">Locations</a></li>
          <li><a class="text-muted" href="#">Privacy</a></li>
          <li><a class="text-muted" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}

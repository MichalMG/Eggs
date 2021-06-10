import offerImg from '../../assets/img/offer.jpg';
import bgImg from '../../assets/img/bg.jpg';
import { Link } from 'react-router-dom';


export default function Offer() {

  return (
    <>
      <div className="my-4 position-relative text-white py-3" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,.025)' }}></div>
        <div className="container position-relative">
          <div className="row align-items-center">

            <div className="col-12 col-lg-7 col-xl-6 mt-3 mt-lg-0 order-2 order-lg-1">
              <h1 className="text-myorange text-start">Nasza oferta</h1>
              <p>W ofercie posiadamy tylko <span className="fw-bold">świeże</span> jajka, a ich jakość potrafi pozytywnie zaskoczyć!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumenda facere dolore. Modi, delectus? Nam?</p>
              <Link to="/offer" onClick={() => window.scrollTo(0, 0)} className="btn btn-outline-myorange">Więcej informacji</Link>
            </div>
            <div className="col-10 col-sm-8 col-lg-5 col-xl-6  ms-auto me-auto ms-lg-0 me-lg-0 order-1 order-lg-2 image_section_home">
              <div className="rounded-pill overflow-hidden">
                <img src={offerImg} className="rounded-pill" alt="" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
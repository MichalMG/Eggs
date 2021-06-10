import { Link } from 'react-router-dom';
import boxEggs from '../../assets/img/wytlaczanka.jpg';


export default function Box() {

  return (
    <>
      <div className="my-4 py-3 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 col-sm-8 col-lg-5 col-xl-6  ms-auto me-auto ms-lg-0 me-lg-0 image_section_home" style={{ overflow: 'hidden' }}>
              <div className="rounded-pill overflow-hidden">
                <img src={boxEggs} alt="" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-6 mt-3 mt-lg-0">
              <h1 className="text-mydbl text-start">Opakowania</h1>
              <p className="text-mydbl">W sprzedaży posiadamy kilka rodzajów opakowań, tak więc jesteśmy w stanie sprostać zapotrzebowaniu <span className="fw-bold">każdego</span> klienta- detalicznego i hurtowego</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumenda facere dolore. Modi, delectus? Nam?</p>
              <Link to="/boxes" onClick={() => window.scrollTo(0, 0)} className="btn btn-outline-mydbl">Więcej informacji</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
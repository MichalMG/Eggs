import { Link } from 'react-router-dom';
import bgImg from '../../assets/img/bg.jpg';


export default function Orders() {

  return (
    <div className="my-4 position-relative text-white py-3" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,.025)' }}></div>

      <div className="container position-relative">
        <div className="row align-items-stretch">

          <div className="col-12 col-xl-6 mt-3 order-1 order-xl-1">
            <h1 className="text-myorange text-start">Zamówienia</h1>
            <p className="text-myorange">Zamów nasze jajka w kilku prostych krokach!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumendaadipisicing elit. In architecto ducimus quasi, fugiat eos pariatur impedit magnam fuga dolor at, nesciunt ut beatae error assumenda facere dolore. Modi, delectus? Nam?</p>
          </div>




          <div className="col-12 col-xl-6 order-1 order-xl-2 mt-3 mt-xl-0 aling-items-center d-flex">

            <div className="row">
              <div className="col-12 col-md-6 d-flex align-items-center text-myorange">
                <p className="display-4 me-3 text-muted">01</p>
                <p>Zapraszamy do kontaktu telefonicznego lub mailowego, aby umówić dogodny termin na spotkanie</p>
              </div>

              <div className="col-12 col-md-6 d-flex align-items-center text-myorange">
                <p className="display-4 me-3 text-muted">02</p>
                <p>Podczas spotkania ustalamy wszystkie szczegóły takie jak wielkość zamówień, cenę oraz harmonogram dostaw</p>
              </div>

              <div className="col-12 col-md-6 d-flex align-items-center text-myorange">
                <p className="display-4 me-3 text-muted">03</p>
                <p>Realizacja zamówienia zgodnie z wcześniejszymi ustaleniami</p>
              </div>

              <div className="col-12 col-md-6 d-flex align-items-center text-myorange">
                <p className="display-4 me-3 text-muted">04</p>
                <p>Klientów detalicznych zapraszamy do naszego sklepu</p>
              </div>

            </div>


          </div>




        </div>
        <Link to="/orders" onClick={() => window.scrollTo(0, 0)} className="btn btn-outline-myorange">Więcej informacji</Link>
      </div>
    </div>
  )
}
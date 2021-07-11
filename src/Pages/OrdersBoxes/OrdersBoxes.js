import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from "../../hooks/useWebTitle";
import OrderSteps from "../../components/OrdersBoxes/OrderSteps/OrderSteps";
import bgDark from '../../assets/img/bg.jpg';

import boxExample from '../../assets/img/wytlaczanka.jpg'
import box from '../../assets/img/box.jpg'
import box1 from '../../assets/img/box_1.jpg'
import box2 from '../../assets/img/box_2.jpg'

export default function OrderBoxes() {

  const setTitle = useWebTitle();
  setTitle("Zamówienia");

  const boxesElements = [{
    image: box1,
    title: '6 JAJEK',
  }, {
    image: box,
    title: '10 JAJEK',
  }, {
    image: box2,
    title: '30 JAJEK',
  }, {
    image: boxExample,
    title: '60 JAJEK',
  }, {
    image: boxExample,
    title: '100 JAJEK',
  }, {
    image: boxExample,
    title: '150 JAJEK',
  }, {
    image: boxExample,
    title: '200 JAJEK',
  }]

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Zamówienia</h1>

        <div className="container">
          <div className="row d-flex align-items-start justify-content-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h3 className="text-center text-myorange py-3 ">Klient detaliczny</h3>
              <p>Realizacja zamówień detalicznych odbywa się w naszym punkcie sprzedaży. Nie wymagamy wcześniejszego zamówienia, tak więc zapraszamy do naszego firmowego sklepu, gdzie zawsze czekają na Państwa świeże jajka.</p>
              <button type="button" className="btn btn-outline-mydbl" data-bs-toggle="modal" data-bs-target="#priceModal">Sprawdź aktualną cenę jajek</button>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h3 className="text-center text-myorange py-3">Klient hurtowy</h3>
              <p>Wszystkich zainteresowanych współpracą z naszą firmą zapraszam do kontaktu mailowego lub telefonicznego, gdzie umówimy dogodny termin spotkania, aby ustalić wszyskie szczegóły współpracy takie jak ilość zamawianych jajek, cenę oraz harmonogram dostaw. Oczywiście wszystkie szczegóły możemy też ustalić telefonciznie lub mailowo.</p>
            </div>

          </div>
        </div>
      </div>

      <div className="my-4" style={{ background: `url(${bgDark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 mb-4">
              <OrderSteps />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Nasze opakowania</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">


            {boxesElements.map((box, index) => {
              return (
                <div key={index} className="col-12 col-sm-10 col-md-6 col-lg-4 my-2 mb-md-4">
                  <div className="card rounded-3 overflow-hidden card__box position-relative">
                    <img src={box.image} alt="eggs box" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-header bg-dark text-myyellow fw-bold text-center">{box.title}</div>
                    <div className="card__box-container">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem alias et facili</p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221110.49998026894!2d20.846354050525463!3d52.24421419675026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1623270664329!5m2!1spl!2spl" style={{ border: 0, width: '100%', height: '40vh' }} allowFullScreen="" loading="lazy" title="map"> </iframe>
      </div>




      {/* Modal start */}
      <div className="modal fade" id="priceModal" tabIndex="-1" aria-labelledby="priceModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-myyellow">
            <div className="modal-header">
              <h5 className="modal-title" id="priceModalLabel">Cennik</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body px-0 pb-0">
              <table className="table table-dark table-hover text-center">
                <thead>
                  <tr className="text-myyellow">
                    <th scope="col">Rozmiar</th>
                    <th scope="col">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>0.80 zł</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>1.00 zł</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>1.20 zł</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-muted text-center">*podana cena dotyczy 1 sztuki</p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </>
  )
}
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from "../../hooks/useWebTitle";

export default function Order() {

  const setTitle = useWebTitle();
  setTitle("Zamówienia");

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Detaliczne</h1>

        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <p>Realizacja zamówień detalicznych odbywa się w naszym punkcie sprzedaży. Nie wymagamy wcześniejszego zamówienia, tak więc zapraszamy do naszego firmowego sklepu ..... Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa earum eos illum ipsam reiciendissit amet consectetur adipisicing elit. Cum culpa earum eos illum ipsam reiciendis</p>
              <button type="button" className="btn btn-outline-mydbl" data-bs-toggle="modal" data-bs-target="#priceModal">Sprawdź aktualną cenę jajek</button>
            </div>
            <div className="col-12 col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221110.49998026894!2d20.846354050525463!3d52.24421419675026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1623270664329!5m2!1spl!2spl" style={{ border: 0, width: '100%', height: '40vh' }} allowFullScreen="" loading="lazy" title="map"> </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Hurtowe</h1>

        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6">
              <p>Wszystkich zainteresowanych współpracą z naszą firmą zapraszamy do kontaktu mailowego lub telefonicznego, gdzie umówimy dogodny termin spotkania, aby ustalić wszyskie szczegóły dostaw takie jak ilość zamawianych jajek, cenę oraz harmonogram dostaw.</p>
              <p>Jest też możliwość ustalenia wszystkich szczegółów mailowo lub telefonicznie, tak więc jeśli .... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores fuga perferendis accusamus maiores officia optio amet consectetur, sit ipsum recusandae consequuntur explicabo voluptatibus vero quod, enim, veniam doloremque impedit!</p>
            </div>
            <div className="col-12 col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221110.49998026894!2d20.846354050525463!3d52.24421419675026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1623270664329!5m2!1spl!2spl" style={{ border: 0, width: '100%', height: '40vh' }} allowFullScreen="" loading="lazy" title="map"> </iframe>
            </div>
          </div>
        </div>

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
                    <th scope="col">Opakowanie</th>
                    <th scope="col">rozmiar</th>
                    <th scope="col">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30 JAJEK</td>
                    <td>S</td>
                    <td>28 zł</td>
                  </tr>
                  <tr>
                    <td>30 JAJEK</td>
                    <td>M</td>
                    <td>35 zł</td>
                  </tr>
                  <tr>
                    <td>30 JAJEK</td>
                    <td>L</td>
                    <td>43 zł</td>
                  </tr>

                  <tr>
                    <td>10 JAJEK</td>
                    <td>S</td>
                    <td>10 zł</td>
                  </tr>
                  <tr>
                    <td>10 JAJEK</td>
                    <td>M</td>
                    <td>13 zł</td>
                  </tr>
                  <tr>
                    <td>10 JAJEK </td>
                    <td>L</td>
                    <td>16 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </>
  )
}
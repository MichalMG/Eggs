import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import eggImg from '../../assets/img/company_2.jpg';
import offer_2 from '../../assets/img/offer_2.jpg';
import useWebTitle from "../../hooks/useWebTitle";
import { Link } from "react-router-dom";

export default function Offer() {

  const setTitle = useWebTitle();
  setTitle("Oferta");

  return (
    <>

      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Nasza oferta</h1>
        <div className="container">

          <div className="row py-4 d-flex justify-content-center">

            <div className="col-12 col-xl-6 mt-4 mt-xl-0 order-2 order-xl-1">
              <div className="row">
                <div className="col-12">
                  <p>Od początku działalności firmy dostarczamy do Państwa jajka ....</p>
                </div>
                <div className="col-12">
                  <h4 className="text-mydbl">Świeżość, smak, intensywny kolor i twarda skorupka</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed, natus ipsum voluptatem, saepe enim libero dignissimos esse nihil sint quibusdam autem fugiat porro consequatur? Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit. Ipsa eligendi in aliquid impedit.</p>
                  <div>
                    <h4 className="text-mydbl"> Jajka pakujemy w opakowania hurtowe jak i detaliczne</h4>
                    <p>W przypadku zamówienia hurtowego, jajka pakujemy i dostarczamy w opakowaniach zbiorczych: 100, 200, 300, 400 jajek</p>
                    <p>W przypadku zamówienia detalicznego, jajka pakujemy w opakowania 6, 10, 20, 30, 40, 50, po odbiór jajek zapraszamy do naszego sklepu stacjonarnego XXX. Przy większym zamówieniu istnieje możliwość dostarczenia jajek pod wskazany adres. Po szczegóły zapraszamy do kontaktu</p>
                  </div>
                  <div className="d-flex flex-column">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/orders" className="btn btn-mydbl mb-3">Sprawdź jak zamówić jajka</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/boxes" className="btn btn-mydbl">Sprawdź wszystkie opakowania jakie mamy w ofercie</Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-8 col-xl-6 order-1 order-xl-2">
              <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <img src={eggImg} className="rounded-circle" alt="" style={{ width: '90%', height: 'auto' }} />
              </div>
            </div>


          </div>


          <div className="row py-4 d-flex justify-content-center">


            <div className="col-8 col-xl-6 ">
              <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                <img src={offer_2} className="rounded-circle" alt="" style={{ width: '90%', height: 'auto' }} />
              </div>
            </div>


            <div className="col-12 col-xl-6 mt-4 mt-xl-0 ">
              <div className="row">
                <div className="col-12">
                  <h4 className="text-mydbl">Wielkość oraz gramatura jajek</h4>
                  <p>W ofercie posiadamy... Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed, natus ipsum voluptatem, saepe enim libero dignissimos esse nihil sint quibusdam autem fugiat porro consequatur? Ipsa eligendi in aliquid impedit.</p>
                  <div>
                    <table className="table table-dark table-hover text-center">
                      <thead>
                        <tr className="text-myyellow">
                          <th scope="col">Rozmiar</th>
                          <th scope="col">Opis</th>
                          <th scope="col">Gramatura (g)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">XL</th>
                          <td>lorem lorem</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <th scope="row">L</th>
                          <td>lorem lorem</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <th scope="row">M</th>
                          <td>lorem lorem</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <th scope="row">S</th>
                          <td>lorem lorem</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <th scope="row">XS</th>
                          <td>lorem lorem</td>
                          <td>200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>


          </div>




        </div>
      </div>
    </>
  )
}
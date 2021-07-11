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
                  <p className="fs-5 fw-bold text-myorange">Twarda ciemna skorupka, intesnywny kolor żółtka i doskonały smak! To jest to co nas wyróżnia.</p>
                  <p>Od wielu lat jajka są niezbędną pozycją w każdej kuchni, używamy ich do wypieków i wielu potraw. Bardzo istotną kwestią jest zakup dobrej jakości jajka, a zawsze przemawia za tym świeżość, twarda ciemna skorupka i intensywny kolor żółtka.</p>
                  <p><span className="text-mydbl fw-bold">Świeżość-</span> zaraz po zniesieniu jajka trafiają do pakowni i często jeszcze tego samego są dostarczane do klientów, tak więc nasi klienci mają pewność, że otrzymują świeże jajka, a nie takie, które leżały już jakiś czas na magazynie.</p>
                  <p><span className="text-mydbl fw-bold">Twarda skorupka i intensywny kolor żółtka-</span> sami mieszamy paszę, tak więc dostarczamy wszystkich niezbędnych składników co przekłada się na mocne twarde skorupki oraz intensywny kolor żółtka. Mocna skorupka i intensywny kolor żółtka świadczą o wysokiej jakości jajka</p>
                  <p><span className="text-mydbl fw-bold">Wysoki standard produkcji-</span> Nasza ferma spełnia wszystkie aktualne wymogi zgodne z rozporządzeniem.</p>

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


            <div className="col-12 col-xl-6 mt-4 mt-xl-0 " style={{ flexGrow: 1 }}>
              <div className="row" style={{ height: '100%' }}>
                <div className="col-12 d-flex flex-column justify-content-evenly">

                  <div>
                    <p className="fs-5 fw-bold text-myorange">Pakowanie jajek.</p>
                    <p>Jajka pakujemy w kartonowe opakowania 6/10/30/60/100/150/200 sztuk. Przy zamówieniach hurtowych/stałych dostawach w obrębie 100 km od siedziby firmy jajk dostarczamy bezpłatnie własnym transportem</p>
                    <p>W przypadku mniejszych zamówień zapraszamy do naszego punktu stacjonarnego. Przy większym zamówieniu istnieje możliwość dostarczenia jajek pod wskazany adres.</p>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/ordersandboxes" className="btn btn-outline-mydbl mb-3">Sprawdź nasze opakowania i zamów jajka</Link>
                  </div>

                  <div>
                    <p className="fs-5 fw-bold text-myorange">Wielkość oraz gramatura jajek</p>
                    <p>W ofercie posiadamy 3 rozmiary jajek. Poniżej przedstawiamy gramaturę dla każdego rozmiaru.</p>
                  </div>
                  <div>
                    <table className="table table-dark table-hover text-center">
                      <thead>
                        <tr className="text-myyellow">
                          <th scope="col">Rozmiar</th>
                          <th scope="col">Gramatura (g)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">L</th>
                          <td>125</td>
                        </tr>
                        <tr>
                          <th scope="row">M</th>
                          <td>95</td>
                        </tr>
                        <tr>
                          <th scope="row">S</th>
                          <td>65</td>
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
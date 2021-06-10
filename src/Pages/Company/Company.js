import img_1 from '../../assets/img/company_1.jpg'
import img_2 from '../../assets/img/company_2.jpg'
import img_3 from '../../assets/img/company_3.jpg'
import Features from "../../components/Company/Features";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from '../../hooks/useWebTitle';

export default function Company() {

  const setTitle = useWebTitle();
  setTitle("O firmie");

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Informacje o firmie</h1>
        <div className="container">
          <Features />

          <div className="row">
            <div className="col-4">
              <div className="position-relative" style={{ width: '100%', height: '300px' }} >
                <div style={{ background: `url(${img_1})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>
            <div className="col-4">
              <div className="position-relative" style={{ width: '100%', height: '300px' }}  >
                <div style={{ background: `url(${img_2})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>
            <div className="col-4">
              <div className="position-relative" style={{ width: '100%', height: '300px' }}  >
                <div style={{ background: `url(${img_3})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>
          </div>

          <div className="row my-3">

            <div className="col-4">
              <h1 className="text-mydbl text-center">Dlaczego my ?</h1>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">01.</p>
                <p>Kładziemy duży nacisk na bardzo dobre warunki zwierząt</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">02.</p>
                <p>Jak najlepsza jakość jajek jest dla nas bardzo ważna</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">03.</p>
                <p>Posiadamy wieloletnie doświadczenie</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">04.</p>
                <p>Indywidualnie podchodzimy do każdego klienta bez względu na wielość zamówienia</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">05.</p>
                <p>Duża elastyczność i możliwość porozumienia się w każdej sytuacji</p>
              </div>
            </div>

            <div className="col-4">
              <h1 className="text-mydbl text-center">Nasza historia</h1>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">1980</p>
                <p>Założenie firmy ... </p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2000</p>
                <p>Modernizacja- nowe urządzenia</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2005</p>
                <p>Otwarcie sklepu detalicznego</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2000</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
            </div>


            <div className="col-4">
              <h1 className="text-mydbl text-center">Co nas wyróżnia ?</h1>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">01.</p>
                <p>Jakość- zawsze na pierwszym miejscu stawiamy na jakość. Dbamy o to na każdym kroku aby nasze jajka były jak najlepsze. Posiadamy własną paszę oraz staramy się zapewnić jak najlpesze warunki bytowania dla naszych zwierząt</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">02.</p>
                <p>Doświadczenie i zaufanie- nieprzerwanie od ponad 40 lat dostarczamy jajka. Przez te wszystkie lata stworzyliśmy bazę zadowolonych, stałych klientów bez których ciężko się utrzymać tak długo na rynku.</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">03.</p>
                <p>Szybkie dostawy zamówień- bardzo często się zdarza, że zamówione jajka jeszcze tego samego dnia są u klienta</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">04.</p>
                <p>Cena- staramy się być konkurencyjni na rynku, w przypadku zamówień hurtowych zawsze podchodzimy indywidualnie, a w przypadku większych zamówień detalicznych istnieje możliwość otrzymania rabatu.</p>
              </div>
            </div>



          </div>


        </div>
      </div>
    </>
  )
}
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">02.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">03.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">04.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
            </div>

            <div className="col-4">
              <h1 className="text-mydbl text-center">Nasza historia</h1>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2000</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2000</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">2000</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">02.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">03.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
              <div>
                <p className="mb-0 display-6 fw-bold text-myorange">04.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque sit sint vitae, facilis quas sunt dolor ad minus necessitatibus</p>
              </div>
            </div>



          </div>


        </div>
      </div>
    </>
  )
}
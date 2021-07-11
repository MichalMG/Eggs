import { useRef } from "react";
import { Link } from "react-router-dom";
import kura from '../../assets/img/kura.jpg';
import Features from "./Features";


export default function Company() {
  const about_nav = useRef();
  const about_content = useRef();

  const btnHandler = (e, name) => {
    for (let i = 0; i < about_nav.current.children.length; i++) {
      about_nav.current.children[i].classList.remove('activeElement')
    }

    e.target.parentNode.classList.add('activeElement');

    for (let i = 0; i < about_content.current.children.length; i++) {
      if (about_content.current.children[i].getAttribute('data-name') === name) {
        about_content.current.children[i].classList.add('activeContent');
      } else {
        about_content.current.children[i].classList.remove('activeContent');
      }
    }
  }

  return (
    <div className="my-4 py-3 bg-light">
      <div className="container ">

        <Features showAll={false} />


        <div className="row">
          <div className="col-10 col-sm-8 col-lg-5 col-xl-6  ms-auto me-auto ms-lg-0 me-lg-0 image_section_home">
            <div className="rounded-pill overflow-hidden">
              <img src={kura} alt="" className="rounded-pill" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">

            <div className="text-start mt-3 mt-lg-0">
              <p className="fs-3 fw-bold text-mydbl mb-1">Jesteśmy na rynku od ponad 40 lat</p>
              <p className="fs-5 text-mydbl">Nasza firma została założona w 1980 roku i od wielu lat, nieprzerwanie produkujemy i dostarczamy do Was nasze jajka</p>
            </div>

            <div style={{ minHeight: '40%' }}>
              <div className="section_company position-relative">
                <div className="position-absolute" style={{ width: '100%', height: '4px', left: 0, bottom: 0, backgroundColor: "#D9D9D9", borderRadius: '10px', overflow: 'hidden' }}></div>
                <ul ref={about_nav} className="d-flex justify-content-evenly px-0" style={{ listStyle: "none" }}>
                  <li className="position-relative activeElement" >
                    <button onClick={(e) => btnHandler(e, "about")} className=" btn shadow-none text-mymbl"  >O nas</button >
                    <div className="position-absolute about_nav"></div>
                  </li>
                  <li className="position-relative ">
                    <button onClick={(e) => btnHandler(e, "target")} className="btn shadow-none text-mymbl">Dlaczego my?</button >
                    <div className="position-absolute about_nav" ></div>
                  </li>
                </ul>
              </div>

              <div ref={about_content}>
                <div data-name="about" className="activeContent aboutContent">
                  <p>Jesteśmy firmą, która produkuje jajka, posiadamy fachową wiedzę o zwierzętach, sposobie żywienia i paszach, a dodatkowo cały czas się rozwijamy i poszerzamy swoją wiedzę na różnych szkoleniach oraz spotkaniach</p>
                </div>
                <div data-name="target" className="aboutContent">
                  <p className="mb-1">Kładziemy duży nacisk na bardzo dobre warunki zwierząt</p>
                  <p className="mb-1">Jak najlepsza jakość jajek jest dla nas bardzo ważna</p>
                  <p className="mb-1">Wieloletnie doświadczenie</p>
                  <p className="mb-1">Indywidualnie podchodzimy do każdego klienta bez względu na wielość zamówienia</p>
                  <p className="mb-3">Duża elastyczność i możliwość porozumienia się w każdej sytuacji</p>
                </div>
              </div>
            </div>

            <Link to="/company" onClick={() => window.scrollTo(0, 0)} className="btn btn-outline-mydbl align-self-start">Więcej informacji</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
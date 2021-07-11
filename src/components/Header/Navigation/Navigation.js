import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import company_logo from '../../../assets/logo.svg';

export default function Navigation() {
  const mainNav = useRef();
  const mainNavRef = useRef();

  useEffect(() => {

    const mainNavigation = mainNavRef.current;
    const mainNavElement = mainNav.current;

    for (let i = 0; i < mainNavigation.children.length; i++) {
      mainNavigation.children[i].addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    }

    document.addEventListener("scroll", () => {
      mainNavElement.classList.toggle('active', window.scrollY > 0);
    });

    return () => {
      document.removeEventListener("scroll", () => {
        mainNavElement.classList.toggle('active', window.scrollY > 0);
      });
      for (let i = 0; i < mainNavigation.length; i++) {
        mainNavigation.children[i].removeEventListener("click", () => {
          window.scrollTo(0, 0);
        });
      }
    }
  }, []);

  return (
    <div ref={mainNav} className="border-bottom border-2 border-myorange mainNav">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container d-flex align-items-between">

          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="navbar-brand d-flex align-items-center">
            <div className="overflow-hidden" style={{ width: '100%', height: '100%' }}>
              <img className="company_logo_navbar" src={company_logo} alt="company_logo_navbar" />
            </div>
            <h4 className="mb-0 ms-2 text-myyellow">Nazwa firmy</h4>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-column align-items-center align-items-lg-end justify-content-start" id="navbarSupportedContent">

            <div className="navbar-nav ms-auto mb-2 mb-lg-0 text-white order-2 order-lg-1">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end py-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <div className=" d-flex">
                  <p className="ms-4 mb-0 text-sad">Zadzwoń i zamów</p>
                  <p className="ms-4 mb-0 fw-bold"><a className="text-myyellow" style={{ textDecoration: 'none' }} href="tel: +48 000 000 000">+48 000 000 000</a></p>
                </div>
              </div>
            </div>



            <ul ref={mainNavRef} className="navbar-nav ms-lg-auto mb-2 mb-lg-0 order-1 order-lg-2 align-items-center">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" aria-current="page">Strona główna</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/company" className="nav-link" aria-current="page">O firmie</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/offer" className="nav-link" aria-current="page">Nasza oferta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ordersandboxes" className="nav-link" aria-current="page">Zamówienia i opakowania</NavLink>
              </li>
              <li className="nav-item ms-lg-4">
                <NavLink to="/contact" className="btn btn-outline-myyellow nav-link px-3 px-lg-2" aria-current="page">Kontakt</NavLink>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </div>
  )
}
import imgExapmle from '../../assets/img/wytlaczanka.jpg'
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from '../../hooks/useWebTitle';

export default function Boxes() {

  const setTitle = useWebTitle();
  setTitle("Opakowania");

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Dla klientów detalicznych</h1>
        <div className="container">
          <div className="row">

            <div className="col-3">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Dla klientów hurtowych</h1>
        <div className="container">
          <div className="row">

            <div className="col-4">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card">
                <img src={imgExapmle} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Tytuł karty</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium odit eius, reprehenderit aspernatur accusantium harum </p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}
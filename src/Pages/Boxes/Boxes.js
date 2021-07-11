import boxExample from '../../assets/img/wytlaczanka.jpg'
import box from '../../assets/img/box.jpg'
import box1 from '../../assets/img/box_1.jpg'
import box2 from '../../assets/img/box_2.jpg'
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from '../../hooks/useWebTitle';

export default function Boxes() {

  const setTitle = useWebTitle();
  setTitle("Opakowania");

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

    </>
  )
}
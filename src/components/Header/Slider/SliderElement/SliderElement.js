export default function SliderElement(props) {
  return (
    <div className="header_slider-element position-absolute " style={{ width: '100%', height: '100%' }}>
      <div className="slider_img-container position-relative" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <div className="slider_img-background position-absolute" style={{ backgroundColor: 'rgba(0,0,0,.5)', left: 0, top: 0, zIndex: 0, width: '100%', height: '100%' }}></div>
        <img className="slider_image position-absolute" src={props.image} alt="" style={{ minWidth: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }} />
      </div>
      <div className="container position-absolute slider_text text-mybg text-start" style={{ top: '65%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, zIndex: 2, animation: 'textHandler 6s linear' }}>
        <h2 className="fs-1">{props.title}</h2>
        <p>{props.description}</p>
        <button className="btn btn-mybg">{props.btnTitle}</button>
      </div>
    </div>
  )
}
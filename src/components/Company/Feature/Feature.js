function Feature(props) {

  return (
    <div className="col-12 col-sm-6 mb-3 mb-lg-0 col-lg-3 text-center text-sm-start">
      <div className="card-body ">
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center mb-3">
          <h1 className="me-4 display-1" style={{ color: "#ccc" }}>{props.number}</h1>
          <img className="ms-4" src={props.image} alt="" style={{ width: 'auto', height: '75px' }} />
        </div>
        <h5 className="card-title fw-bold text-mydbl">{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Feature;
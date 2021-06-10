import Navigation from "../Navigation/Navigation";
import bgimg from '../../../assets/img/3.jpg';

export default function HeaderPage() {

  return (
    <>
      <Navigation />
      <div className="position-relative" style={{ width: '100%', height: '45vh', zIndex: 1, overflow: 'hidden' }}>
        <div className="position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        <img src={bgimg} alt="" style={{ minWidth: '100%', height: 'auto', }} />
      </div>
    </>
  )
}
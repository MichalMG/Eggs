import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";

export default function Header() {
  return (
    <>
      <header>
        <Navigation />
        <div className="position-relative" style={{ width: '100%', height: '60vh', zIndex: 1 }}>
          <Slider />
        </div>
      </header>

    </>
  )
}
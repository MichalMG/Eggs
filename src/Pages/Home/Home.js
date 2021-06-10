import Box from "../../components/Box/Box";
import Company from "../../components/Company/Company";
import Header from "../../components/Header/Header";
import Offer from "../../components/Offer/Offer";
import Orders from "../../components/Orders/Orders";
import useWebTitle from "../../hooks/useWebTitle";

export default function Home() {
  const setTitle = useWebTitle();
  setTitle("Strona główna");

  return (
    <>
      <Header />
      <Company />
      <Offer />
      <Box />
      <Orders />
      <div className="my-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221110.49998026894!2d20.846354050525463!3d52.24421419675026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1623270664329!5m2!1spl!2spl" title="map" style={{ border: 'none', width: '100%', height: '40vh' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </>
  )
}
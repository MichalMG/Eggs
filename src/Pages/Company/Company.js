import Features from "../../components/Company/Features";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from '../../hooks/useWebTitle';
import company from '../../assets/img/company.jpg'

export default function Company() {

  const setTitle = useWebTitle();
  setTitle("O firmie");

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Informacje o firmie</h1>
        <div className="container">

          <Features showAll={true} />

          <div className="row">
            <div className="col-12">
              <p className="fs-5 text-mydbl"> Jesteśmy firmą produkującą jajka, która jest już na rynku od ponad 40 lat. Od początku działalności firmy, aż po dziś firma pozostaje firmą rodzinną w której sami dbamy o jakość produkowanych jajek co gwarantuje klientom najwyższą jakość produktu. Przez te wszystkie lata stworzyliśmy dużą bazę zadowolonych, stałych klientów bez których ciężko się utrzymać na rynku tak długi czas. Wieloletnie doświadczenie pozwala nam na produkcję wysokiej jakości jajek.Naszą wiedzę cały czas staramy się rozszerzać i wprowadzać najnowższe, sprawdzone rozwiązania. Chętnie odwiedzamy różnego rodzaju tematyczne spotkania i szkolenia na których doskonalimy swoją wiedzę. Zamówienia zawsze staramy się realizować na czas, tak więc nasi klienci mają pewność, że zamówienie zostanie dostarczone w ustalonym terminie. Mamy nadzieję, że wspólnie przetrwamy kolejne lata, a my możemy obiecać, że cały czas się będziemy rozwijać i dostarczać jak najlepszy produkt.</p>
            </div>
            <div className="col-12">
              <div className="position-relative" style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
                <img src={company} alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100%', minHeight: '100%' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
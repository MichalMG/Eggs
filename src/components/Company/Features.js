import ferma from '../../assets/ico-header/ferma.svg';
import jakosc from '../../assets/ico-header/jakosc.svg';
import pasza from '../../assets/ico-header/pasza.svg';
import ceny from '../../assets/ico-header/ceny.svg';
import ksiazka from '../../assets/ico-header/book.svg';
import doswiadczenie from '../../assets/ico-header/doswiadczenie.svg';
import dostawa from '../../assets/ico-header/dostawa.svg';
import rece from '../../assets/ico-header/rece.svg';
import Feature from "./Feature/Feature";

export default function Features(props) {

  const featuresElements = [{
    number: '05',
    title: 'Szybkie dostawy',
    description: 'Sami rozwozimy jajka do naszych klientów- jeśli jest taka potrzeba to nawet dwa razy dziennie',
    image: dostawa
  }, {
    number: '06',
    title: 'Doświadczenie',
    description: 'Jesteśmy na rynku od ponad 40 lat.',
    image: doswiadczenie
  }, {
    number: '07',
    title: 'Indywidualne podejście',
    description: 'Indywidualnie podchodzimy do każdego klienta bez względu na wielość zamówienia',
    image: rece
  }, {
    number: '08',
    title: 'Ciągły rozwój',
    description: 'Często bierzemy udział w tematycznych szkoleniach i spotkaniach.',
    image: ksiazka
  }]

  return (
    <div className="pb-4">
      <div className="row">

        <Feature title="Nowoczesna ferma" description="Na dzień dzisiejszy korzystamy z najnowszych dostępnych technologii." number="01" image={ferma} />
        <Feature title="Najwyższa jakość" description="Od początku istnienia firmy jakość była dla nas najważniejsza." number="02" image={jakosc} />
        <Feature title="Własna pasza" description="Sami dobieramy odpowiednie składniki i mieszamy paszę." number="03" image={pasza} />
        <Feature title="Konkurencyjne ceny" description="Staramy się być mocno konkurencyjni na rynku." number="04" image={ceny} />

        {props.showAll === true ? (
          featuresElements.map((fatureEl, index) => {
            return <Feature key={index} {...fatureEl} />
          })
        ) : null}

      </div>
    </div>
  )
}
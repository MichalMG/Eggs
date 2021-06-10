import ferma from '../../assets/ico-header/ferma.svg';
import jakosc from '../../assets/ico-header/jakosc.svg';
import pasza from '../../assets/ico-header/pasza.svg';
import ceny from '../../assets/ico-header/ceny.svg';
import Feature from "./Feature/Feature";

export default function Features() {

  return (
    <div className="pb-4">
      <div className="row">

        <Feature title="Nowoczesna ferma" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque, accusamus facilis id nihil rem." number="01" image={ferma} />
        <Feature title="Najwyższa jakość" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque, accusamus facilis id nihil rem." number="02" image={jakosc} />
        <Feature title="Własna pasza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque, accusamus facilis id nihil rem." number="03" image={pasza} />
        <Feature title="Konkurencyjne ceny" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque, accusamus facilis id nihil rem." number="04" image={ceny} />

      </div>
    </div>
  )
}
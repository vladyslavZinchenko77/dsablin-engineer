import autocad from '../../../assets/expierence-icons/autocad.jpg';
import max from '../../../assets/expierence-icons/max.jpg';
import office from '../../../assets/expierence-icons/office.jpg';
import photoshop from '../../../assets/expierence-icons/photoshop.jpg';
import avk from '../../../assets/expierence-icons/avk.jpg';
import lira from '../../../assets/expierence-icons/lira.jpg';
import TitleSection from '../../common/TitleSection/TitleSection';
import './Skills.scss';

const skillsData = [
  { src: autocad, title: 'AutoCAD' },
  { src: max, title: 'Autodesk 3ds Max' },
  { src: office, title: 'MS Office' },
  { src: photoshop, title: 'Adobe Photoshop' },
  { src: avk, title: 'АВК' },
  { src: lira, title: 'ПК Лира' },
  { src: lira, title: 'Мономах' },
  { src: lira, title: 'SCAD' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <TitleSection textAlign="left">Skills</TitleSection>
      <ul className="skills__list">
        {skillsData.map((item, index) => (
          <li key={index} className="skills__list-item">
            <img
              className="skills__list-item--img"
              src={item.src}
              alt={item.title}
            />
            <p className="skills__list-item--title">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

import ButtonMain from '../../common/ButtonMain/ButtonMain';
import teamwork from '../../../assets/img/workers.png';
import TitleSection from '../../common/TitleSection/TitleSection';
import './Experience.scss';

const experienceData = [
  {
    period: 'Jun 2016 - Present',
    position: 'Chief Design Engineer.',
    company: 'Archline-2000 LLC',
    description:
      'Development of sections of reinforced concrete structures, structural and erection, architectural networks',
  },
  {
    period: 'Aug 2013 - Jul 2013',
    position: 'Chief Design Engineer.',
    company: '"PMTO "Agrosoyuz"',
    description:
      'Development of sections of reinforced concrete structures, structural and erection, architectural networks',
  },
  {
    period: 'Jun 2012 - Aug 2013',
    position: 'Lead Design Engineer.',
    company: '"PMTO "Agrosoyuz"',
    description:
      'Implementation of processes for developing project documentation, technical calculations, and construction aimed at creating reinforced concrete structures (RCS), taking into account structural and installation aspects (SA)',
  },
  {
    period: 'Aug 2007 - Jun 2012',
    position: 'Design Engineer.',
    company: 'PNPP "Fort"',
    description:
      'Development, calculation, and construction of reinforced concrete structures (RCS), taking into account structural and installation aspects (SA)',
  },
];

const Experience = () => {
  return (
    <section className="experience" id="expierence">
      <TitleSection textAlign="right">Work experience</TitleSection>
      <div className="experience__content">
        <ul className="experience__works">
          {experienceData.map((item, index) => (
            <li key={index} className="experience__works-item">
              <p className="experience__works-item-period">{item.period}</p>
              <h2 className="experience__works-position">{item.position}</h2>
              <h3 className="experience__works-company">{item.company}</h3>
              <p className="experience__works-description">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={teamwork} alt="teamwork" />
        </div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
      >
        <ButtonMain>download cv</ButtonMain>
      </div>
    </section>
  );
};

export default Experience;

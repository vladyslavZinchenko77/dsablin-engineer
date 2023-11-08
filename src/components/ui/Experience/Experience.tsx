import ButtonMain from '../../common/ButtonMain/ButtonMain';

import './Experience.scss';

const experienceData = [
  {
    period: 'Jun 2016 - Present',
    position: 'Главный инженер-конструктор.',
    company: 'ТОВ "Архiлайн-2000"',
    description: 'Разработка разделов КЖ, КМ, АС',
  },
  {
    period: 'Aug 2013 - Jul 2013',
    position: 'Главный инженер-конструктор.',
    company: '"ПМТО "Агросоюз"',
    description: 'Разработка разделов КЖ, КМ, АС',
  },
  {
    period: 'Jun 2012 - Aug 2013',
    position: 'Ведущий инженер - конструктор.',
    company: '"ПМТО "Агросоюз"',
    description: 'Разработка, расчет и конструирование ЖБК, КМ',
  },
  {
    period: 'Aug 2007 - Jun 2012',
    position: 'Инженер - конструктор.',
    company: 'ЧНПП "Форт "',
    description: 'Разработка, расчет и конструирование ЖБК, КМ',
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">Work experience</h2>
      <ul className="experience__works">
        {experienceData.map((item, index) => (
          <li key={index} className="experience__works-item">
            <p className="experience__works-item-period">{item.period}</p>
            <h2 className="experience__works-position">{item.position}</h2>
            <h3 className="experience__works-company">{item.company}</h3>
            <p className="experience__works-description">{item.description}</p>
          </li>
        ))}
      </ul>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
      >
        <ButtonMain>download cv</ButtonMain>
      </div>
    </section>
  );
};

export default Experience;

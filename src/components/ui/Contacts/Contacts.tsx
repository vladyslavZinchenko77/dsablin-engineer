import plain from '../../../assets/img/plane.svg';

import './Contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">
        More information? <br /> Contact me.
      </h2>
      <img src={plain} alt="plain" />
    </section>
  );
};

export default Contacts;

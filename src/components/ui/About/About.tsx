import avatar from '../../../assets/img/avatar.jpg';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import wave from '../../../assets/img/wave.svg';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__content">
        <div className="about__text-block">
          <p className="about__text-block--text">
            За период моей практической деятельности лично мною были проработаны
            , рассчитаны и запроектированы следующие конструкции и сооружения :
            Основания : Фундаменты мелкого заложения , глубокого , свайные
            ростверки под отдельные опоры и свайные ростверки в ввиде свайного
            поля под все сооружение , подпорные стены ( уголковые , массивные )
            , шпунтовое ограждение , плитные ф-ты на естественном основании и на
            грунтовой подушке , ленточные фундаменты , фундаменты под
            оборудование . Железобетонные конструкции : Монолитные жилые здания
            , фундаменты почти всех типов , покрытия , перекрытия , подпорные
            стены , рабочие башни . Металлические конструкции : Этажерки, склады
            , ангары , навесы , галлереи , площадки под оборудование , рабочие
            башни , бункера , административные здания , здания СТО , автосалоны
            . ЛСТК : ангары , склады , 4-х этажное административное здание ,
            пристройка над кирпичным зданием . Усиление металлических и
            железобетонных конструкций : железобетонные балки и плиты покрытия ,
            металлические балки, колонны , фермы , устройство проемов в
            железобетонных и кирпичных зданиях , усиление фундаментов мелкого
            заложения и ленточных
          </p>
          <ButtonMain />
        </div>
        <div className="about__photo-block">
          <img className="about__photo" src={avatar} alt="photo" />
        </div>
      </div>
      <img className="about__img-wave" src={wave} alt="wave" />
    </div>
  );
};

export default About;

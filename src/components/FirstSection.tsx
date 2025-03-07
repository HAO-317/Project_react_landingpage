
import './FirstSection.css';
import brushSvg from '../assets/img/brush.svg';
import megaphoneSvg from '../assets/img/megaphone.svg';
import globeLineSvg from '../assets/img/globe-line.svg';
import objectSelectSvg from '../assets/img/object-select.svg';
import salatJpeg from '../assets/img/salat.jpeg';
import pizzaJpeg from '../assets/img/pizza.jpeg';
import frikadellenJpeg from '../assets/img/frikadellen.jpeg';
import glassJpeg from '../assets/img/glass.jpeg';
import pizza2Jpeg from '../assets/img/pizza2.jpeg';
import scampiJpeg from '../assets/img/scampi.jpeg';
import spagetthiJpeg from '../assets/img/spagetthi.jpeg';
import tellerJpeg from '../assets/img/teller.jpeg';
import BuyBtn from './BuyBtn';

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
};

const FirstSection = () => {
  const services = [
    {
      icon: brushSvg,
      title: 'Brand Identity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
    },
    {
      icon: megaphoneSvg,
      title: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
    },
    {
      icon: objectSelectSvg,
      title: 'Illustration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
    },
    {
      icon: globeLineSvg,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
    },
  ];

  const galleryItems: GalleryItem[] = [
    { id: 1, image: salatJpeg, title: 'Salat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€45 / €65' },
    { id: 2, image: pizzaJpeg, title: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€65 / €70' },
    { id: 3, image: frikadellenJpeg, title: 'Frikadellen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€30.50' },
    { id: 4, image: glassJpeg, title: 'Drinks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 5, image: pizza2Jpeg, title: 'Pizza Italiano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 6, image: scampiJpeg, title: 'Scampi Soup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 7, image: spagetthiJpeg, title: 'Spagetthi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 8, image: tellerJpeg, title: 'Dessert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 9, image: salatJpeg, title: 'Salat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€45 / €65' },
    { id: 10, image: pizzaJpeg, title: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€65 / €70' },
    { id: 11, image: frikadellenJpeg, title: 'Frikadellen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€30.50' },
    { id: 12, image: glassJpeg, title: 'Drinks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 13, image: pizza2Jpeg, title: 'Pizza Italiano', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 14, image: scampiJpeg, title: 'Scampi Soup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 15, image: spagetthiJpeg, title: 'Spagetthi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
    { id: 16, image: tellerJpeg, title: 'Dessert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '€25.50' },
 
  ];

  return (
    <section className="first-section">
      <h2>What We Do</h2>
      <h3>We’ve got everything you need to launch and grow your business</h3>
      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.icon} alt={""} className="service-icon"/>
            <div className='serviceText'>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>

          </div>
        ))}
      </div>
      <div className="gallery">
        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <BuyBtn text="Order" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
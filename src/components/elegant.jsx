import React from 'react';
import './DesignStyles.css';

const Elegant = () => {
  const elegantItems = [
    {
      id: 1,
      image: './assests/images/delegent6.jpg',
      title: 'Timeless elegance meets modern comfort in every corner',
      alt: 'Timeless Elegant'
    },
    {
      id: 2,
      image: './assests/images/delegent.jpg',
      title: 'Sophisticated design with luxurious finishes and soft tones.',
      alt: 'Sophisticated Design'
    },
    {
      id: 3,
      image: './assests/images/delegnt.jpg',
      title: 'A harmonious blend of style, grace, and cozy living',
      alt: 'Graceful Living'
    },
    {
      id: 4,
      image: './assests/images/delegent3.jpg',
      title: 'Contemporary home with clean architecture and cozy, inviting vibes',
      alt: 'Contemporary Elegant'
    },
    {
      id: 5,
      image: './assests/images/delegent4.jpg',
      title: 'Classy spaces with timeless design elements.',
      alt: 'Classy Spaces'
    },
    {
      id: 6,
      image: './assests/images/delegent5.jpg',
      title: 'Modern dcor with classic, graceful accents',
      alt: 'Modern Classic'
    }
  ];

  return (
    <div className="design-page">
      <div className="banner" style={{ backgroundImage: "url('./assests/images/elegent.jpg')" }}>
        Elegant Style
      </div>

      <div className="card-container">
        {elegantItems.map((item) => (
          <div key={item.id} className="card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elegant;

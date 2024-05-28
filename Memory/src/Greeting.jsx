import React, { useState, useEffect } from 'react';

function Greeting() {
  const [images, setImages] = useState([
    { src: 'https://media.giphy.com/media/l46CqLVMWzaJUFPLW/giphy.gif', alt: 'Michael Jordan', name: 'Michael Jordan' },
    { src: 'https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif', alt: 'Steph Curry', name: 'Steph Curry' },
    { src: 'https://media.giphy.com/media/pHWsrOX28FXlAUCRlU/giphy.gif', alt: 'Devin Booker', name: 'Devin Booker' },
    { src: 'https://media.giphy.com/media/hteUrikqzH1aFhdSBj/giphy.gif', alt: 'Kyrie Irving', name: 'Kyrie Irving' },
    { src: 'https://media.giphy.com/media/l46C6wnzd8RgAJKtG/giphy.gif', alt: 'Vince Carter', name: 'Vince Carter' },
    { src: 'https://media.giphy.com/media/bMJqfOtgVEyI2PLnaW/giphy.gif', alt: 'Lebron James', name: 'Lebron James' },
    { src: 'https://media.giphy.com/media/26ufkxGIqLdJOVDVu/giphy.gif', alt: 'Kobe Bryant', name: 'Kobe Bryant' },
    { src: 'https://media.giphy.com/media/65bL0PlYN41W2GZP5J/giphy.gif', alt: 'Trae Young', name: 'Trae Young' },
  ]);

  const [points, setPoints] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);

  useEffect(() => {
    document.title = 'Memory Game';
  }, []);

  const handleImageClick = (alt) => {
    if (lastClicked === alt) {
      setPoints(points + 1);
    } else {
      setPoints(0);
    }
    setLastClicked(alt);
    shuffleImages();
  };

  const shuffleImages = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffled);
  };

  const pageStyle = {
    backgroundColor: 'darkblue',
    padding: '20px',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '10px',
    width: '80%',
  };

  const imageContainerStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={pageStyle}>
      <h1>Memory Game</h1>
      <h2>Points: {points}</h2>
      <div style={containerStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageContainerStyle} onClick={() => handleImageClick(image.alt)}>
            <img src={image.src} alt={image.alt} style={imageStyle} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Greeting;

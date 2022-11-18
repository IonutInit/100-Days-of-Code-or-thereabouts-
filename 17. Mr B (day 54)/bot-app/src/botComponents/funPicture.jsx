import React, { useEffect, useState } from 'react';

const FunPicture = () => {
  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImageUrl(data.message);
  //     });
  // }, []);

  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg'
  return (
    <div>
      <img src={imageUrl} style={{maxWidth: '250px'}}/>
    </div>
  );
};

export default FunPicture;
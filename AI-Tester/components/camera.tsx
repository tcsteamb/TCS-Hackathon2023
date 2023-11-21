import React, { useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';

const Camera: React.FC<{ url: string }> = ({ url }) => {
  const captureThumbnail = useCallback(async () => {
    try {
      const thumbnail = await html2canvas(document.querySelector('#thumbnail-container'));
      // thumbnail.toDataURL() contiene la imagen en formato base64
      console.log(thumbnail.toDataURL());
    } catch (error) {
      console.error('Error al capturar thumbnail:', error);
    }
  }, []);

  return (
    <div>
      <h2>Thumbnail de: {url}</h2>
      <button onClick={captureThumbnail}>Capturar Thumbnail</button>
      <div id="thumbnail-container">
        {/* Mostrar la página web en un iframe */}
        <iframe title="Thumbnail" src={url} width="100%" height="400px" />
      </div>
    </div>
  );
};

export default Camera;
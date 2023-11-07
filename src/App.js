import './App.css';
import { useRef, useState } from 'react';
import uploadIcon from './assets/upload-icon.png';

function App() {

  const [image, setImage] = useState('');
  const [reUploadButton, setReUploadButton] = useState('button-hidden');

  const inputRef = useRef(null);

  const handleImageChange = () => {
    inputRef.current.click();
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setReUploadButton('button-visible')
  }

  return (
    <div className="App">
      <div className='main'>
        <div className='image-preview' onClick={handleImageChange}>
          {image ? <img className='after-image-upload' src={URL.createObjectURL(image)} alt='Uploaded' /> :
            <div className='instructions'>
              <img src={uploadIcon} alt='Icon' />
              <h1 style={{ color: "#3498DB" }}>Click here to upload</h1>
            </div>
          }
        </div>
        <div className='input'>
          <input type='file' onChange={handleImageUpload} ref={inputRef} accept='image/*' />
        </div>

        <button className={reUploadButton} onClick={handleImageChange}>Reupload</button>
      </div>
    </div>
  );
}

export default App;

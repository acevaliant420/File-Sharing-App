import { useState, useEffect, useRef } from 'react';
import './App.css';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();


  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  
  return (
    <div class="upload-container">
        <div class="dropzone">
            <div class="icon-container">
                <img src="./icon.svg" alt="upload icon" class= "center" draggable="false" />
            </div>
            <div class="title">
                <button onClick={() => onUploadClick()}>Upload</button>
                <input
                  type="file" 
                  ref={fileInputRef}  
                  style={{ display: "none" }}
                />               
            </div>
        </div>
      </div>
  );
}

export default App;

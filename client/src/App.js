import { useState, useEffect, useRef } from 'react';
import './App.css';
import {uploadFile} from './service/api.js';


function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();


  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
    
        try {
          const response = await uploadFile(data);
          if (response && response.path) {
            setResult(response.path);
            console.log("File uploaded successfully:", response);
          } else {
            console.error("Invalid response from uploadFile:", response);
            // Handle the error or set a default result
          }
        } catch (error) {
          console.error("Error uploading file:", error);
          // Handle the error
        }
      }
    };
    getImage();
  }, [file])
  
  return (
    <section className="App">
    <div class="one">
      <h1>File Sharing App</h1>
    </div>
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
                  onChange={(e) => setFile(e.target.files[0])}
                />               
            </div>
        </div>

        <a class = "link" href={result} target="_blank">{result}</a>
    </div>
    </section>

  );
}

export default App;

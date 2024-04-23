import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { uploadFile } from './service/api.js';

function App() {
    const [file, setFile] = useState('');
    const [result, setResult] = useState('');
    const fileInputRef = useRef();

    const onUploadClick = () => {
        fileInputRef.current.click();
    };

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
                        localStorage.setItem("uploadedFile", response.path); // Set result in local storage
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
    }, [file]);

    useEffect(() => {
        // Retrieve result from local storage on component mount
        const storedResult = localStorage.getItem("uploadedFile");
        if (storedResult) {
            setResult(storedResult);
        }
    }, []);

    return (
        <section className="App">
            <div className="one">
                <h1>File Sharing App</h1>
            </div>
            <div className="upload-container">
                <div className="dropzone">
                    <div className="icon-container">
                        <img src="./icon.svg" alt="upload icon" className="center" draggable="false" />
                    </div>
                    <div className="title">
                        <button onClick={onUploadClick}>Upload</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>
                <a className="link" href={result} target="_blank">{result}</a>
            </div>
            <div className="container">
                <h3>Send an Email</h3>
                <button
                    type="submit"
                    onClick={() => {
                        const sendLinkUrl = `http://localhost:5000/?result=${(result)}`;
                        window.location.href = sendLinkUrl;
                    }}
                >
                    Send Link
                </button>
                <p id="message"></p>
            </div>
        </section>
    );
}

export default App;

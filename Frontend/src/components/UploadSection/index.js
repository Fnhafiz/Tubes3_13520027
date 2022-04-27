import React, { useState, Component} from 'react'
import { UploadLabel, UploadH1, UploadInput, UploadButton, UploadForm, UploadContainer, UploadContent} from './UploadElements'

const UploadPage = () => {
    
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(e.target.value);
        const reader = new FileReader();
        reader.readAsText(newFile);
        reader.onload = () => {
            setText(reader.result);
        }
        reader.onerror = () => {
            console.log('file error', reader.error)
        }
    }
  
    return (
        <div id= 'upload'>
            <UploadContainer>
                <UploadContent>
                    <UploadH1>Add New Disease</UploadH1>
                    <UploadForm>
                        <UploadLabel>New Disease</UploadLabel>
                        <UploadInput 
                            type="text" 
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <UploadLabel>DNA Sequence</UploadLabel>
                        <UploadInput 
                            type="file" 
                            required 
                            value={file}
                            onChange={handleFileChange}
                        />
                        <UploadButton>Submit</UploadButton>
                        {/* <p>{text}</p> */}
                    </UploadForm>
                </UploadContent>
            </UploadContainer>
        </div>
    );
}

export default UploadPage
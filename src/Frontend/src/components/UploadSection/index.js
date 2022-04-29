import React, { useState, useEffect} from 'react'
import { UploadLabel, UploadH1, UploadInput, UploadButton, UploadForm, UploadContainer, UploadContent} from './UploadElements'
import Axios from 'axios'

const UploadPage = () => {
    
    const [titleDis, setTitleDis] = useState('');
    const [fileDis, setFileDis] = useState(null);
    const [textDis, setTextDis] = useState('');
    const [isExist, setIsExist] = useState('');
    const [message, setMessage] = useState('');

    // useEffect(()=>{
    //     Axios.get('http://localhost:3001/api/getUpload').then((response)=>setMessage(response.data))
    // })

    const SubmitUpload = () => {
        Axios.post('http://localhost:3001/api/upload', {
            titleDis: titleDis,  
            textDis: textDis,
        }).then((response)=>{
            setMessage(response.data)
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFileDis(e.target.value);
        const reader = new FileReader();
        reader.readAsText(newFile);
        reader.onload = () => {
            setTextDis(reader.result);

            console.log("Halo")
            setIsExist("yes");
            
            // if (funcRegex(reader.result) == true){
            //     setTextDis(reader.result);
            //     setIsExist("true");
            // } else if (funcRegex(reader.result) == false){
            //     console.log("DNA Sequence can only filled by A G C T")
            //     setTextDis(reader.result)
            //     setIsExist("false");
            // }

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
                    <UploadForm onSubmit={onSubmit}>
                        <UploadLabel>New Disease</UploadLabel>
                        <UploadInput 
                            type="text" 
                            required 
                            value={titleDis}
                            onChange={(e) => setTitleDis(e.target.value)}
                        />
                        <UploadLabel>DNA Sequence</UploadLabel>
                        <UploadInput 
                            type="file" 
                            required 
                            value={fileDis}
                            onChange={handleFileChange}
                        />
                        <UploadButton onClick={SubmitUpload}>Submit</UploadButton>
                        <UploadLabel> </UploadLabel>
                        <UploadLabel><br/><br/>{message}</UploadLabel>
                    </UploadForm>
                </UploadContent>
            </UploadContainer>
        </div>
    );
}

export default UploadPage
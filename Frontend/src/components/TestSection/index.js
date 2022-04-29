import React, { useState, Component} from 'react'
import { TestLabel, TestH1, TestInput, TestTextArea, TestButton, TestForm, TestContainer, TestContent} from './TestElements'

const TestPage = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState(null);
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

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
        <div id= 'test'>
            <TestContainer>
                <TestContent>
                    <TestH1>DNA Testing</TestH1>
                    <TestForm onSubmit={onSubmit}>
                        <TestLabel>Username</TestLabel>
                        <TestInput 
                            type="text" 
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TestLabel>Disease Prediction</TestLabel>
                        <TestTextArea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></TestTextArea>
                        <TestLabel>DNA Sequence</TestLabel>
                        <TestInput 
                            type="file" 
                            required 
                            value={file}
                            onChange={handleFileChange}
                        />
                        <TestButton>Submit</TestButton>
                        <p>{title}</p>
                        <p>{body}</p>
                        <p>{text}</p>
                    </TestForm>
                </TestContent>
            </TestContainer>
        </div>
    );
}

export default TestPage
import React, { useState} from 'react'
import { TestLabel, TestH1, TestInput, TestTextArea, TestButton, TestForm, TestContainer, TestContent} from './TestElements'

const TestPage = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    return (
        <div id= 'test'>
            <TestContainer>
                <TestContent>
                    <TestH1>DNA Testing</TestH1>
                        <TestForm>
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
                        <TestButton>Submit</TestButton>
                    </TestForm>
                </TestContent>
            </TestContainer>
        </div>
    );
}

export default TestPage
import styled from 'styled-components';

export const SearchContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 10px;
height: 800px;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
}
`;

export const SearchContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    //display: flex;
    flex-dirextion: row;
    align-items: center;
`

export const SearchLabel = styled.label`
    color: #0c0c0c;
    font-size: 16px;
    text-align: center; 
`

export const SearchH1 = styled.h1`
    color: #0c0c0c;
    font-size: 48px;
    text-align: center;
    margin-bottom: 48px;
    margin-top: -300px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #0c0c0c;
    box-sizing: border-box;
    display: block;
`

export const SearchButton = styled.button`
    background: #89cff0;
    color: #0c0c0c;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
`

export const SearchForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
`
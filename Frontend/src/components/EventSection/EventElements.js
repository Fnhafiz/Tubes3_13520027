import styled from 'styled-components'

export const EventContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    background: #89cff0;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen adn (max-width: 480px){
        height: 1300px;
    }
`;

export const EventsWrapper = styled.div`
    margin-left: 20px
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const EventsCard = styled.div `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const EventsIcon = styled.img`
    height: 200px;
    width: 160px;
    margin-bottom: 10px;
`;

export const EventsH1 = styled.h1`
    margin-left : 128px;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 32px;
    justify : center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const EventsH2 = styled.h2`
    margin-top:10px;    
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const EventsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
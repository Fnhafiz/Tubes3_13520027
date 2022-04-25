import React from 'react';
import Icon1 from '../../images/photo1.jpg'
import Icon2 from '../../images/logo.svg'
import Icon3 from '../../images/logo.svg'
import { EventContainer, EventsH1, EventsH2, EventsWrapper, EventsCard, EventsIcon, EventsP } from './EventElements';

const Events = () => {
    return (
        <EventContainer id="event">
            <EventsH1> Our Profile </EventsH1>
            <EventsWrapper>
                <EventsCard>
                    <EventsIcon src={Icon1}/>
                    <EventsH2>Farhan Hafiz</EventsH2>
                    <EventsP>13520027</EventsP>
                </EventsCard>
                <EventsCard>
                    <EventsIcon src={Icon2}/>
                    <EventsH2>Ilham Pratama</EventsH2>
                    <EventsP>13520041</EventsP>
                </EventsCard>
                <EventsCard>
                    <EventsIcon src={Icon3}/>
                    <EventsH2>Haidar Ihzaulhaq</EventsH2>
                    <EventsP>13520150</EventsP>
                </EventsCard>
            </EventsWrapper>
        </EventContainer>
    )
}

export default Events

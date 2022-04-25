import React, { useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div id='home'>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> DNA Pattern Matching</HeroH1>
                <HeroP>
                Manusia umumnya memiliki 46 kromosom di dalam setiap selnya. Kromosom-kromosom
                tersebut tersusun dari DNA (deoxyribonucleic acid) atau asam deoksiribonukleat. DNA tersusun
                atas dua zat basa purin, yaitu Adenin (A) dan Guanin (G), serta dua zat basa pirimidin, yaitu
                sitosin (C) dan timin (T).  DNA Pattern Matching ini akan mendeteksi apakah seorang pasien mempunyai penyakit genetik tertentu.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='test' onMouseEnter = {onHover} on MouseLeave = {onHover}
                     primary='true' dark='true'
                     smooth={true} duration={500} spy = {true}
                     exact='true' offset={-80}>
                        Test {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </div>
    )
}

export default HeroSection

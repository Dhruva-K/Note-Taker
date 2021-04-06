import React from 'react'
import { Button } from './Button'
import './Hero.css';
import '../App.css';
import Video2 from "./videos/video-2.mp4"

function Hero() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
            <source src={Video2} type="video/mp4"/>  
            </video>
            <h1>Note Taking App</h1>
            <p>That one place to store your notes</p>
            <div className = "hero-btns">
                <Button 
                className='btns' 
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>

            </div>
            
        </div>
    )
}

export default Hero

import { Button } from '@material-ui/core'
import React from 'react'
import { useEffect,useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';


function Voice({updateBody,id}) {
    const [listening, setIsListening] = useState(false)
    const {transcript, resetTranscript} = useSpeechRecognition();

    useEffect(()=>{ 
        listen()
    },[listening])

    useEffect(()=>{
        if(transcript!== ''){
            updateBody(transcript)
        }
        
    },[transcript])
    useEffect(()=>{
        
        resetTranscript();
    },[id])

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
          <div className="mircophone-container">
            Browser is not Support Speech Recognition.
          </div>
        );
      }
    
    const listen=()=>{
        
        if(listening){
        console.log("listening")  
          
        SpeechRecognition.startListening({continuous: true})
        
        
        }
        else{
            
            SpeechRecognition.stopListening();
            
        }
        
        
    }
  
    
    return (
        
        <Button variant="contained"
         startIcon={<KeyboardVoiceIcon  />} onClick={()=> setIsListening(prevState=>!prevState)}> Voice  </Button>
        
        
    )

   
}

export default Voice

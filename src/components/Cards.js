import React from 'react';
import Voice from '../editor/Voice';
import Carditem from './Carditem';
import './Cards.css';
import not from "../images/Add notes-amico.svg";
import voice_ from "../images/Voice control-pana.svg";
import sum_ from "../images/Notes-pana.svg";

function Cards() {
    return (
        <div className='cards'>
            <h1>Taking Notes the right way!</h1>
            <div className='cards__container'>
                <div className='sec_1'>
                <div className = "img_contain">
                    <img src = {sum_} className="images"/>
                    </div>
                    <Carditem text = "Making notes is easy!"
                    para = "You can now easily create, store and edit your notes in NotesPro "
                    path = "/editor"
                   />
                </div>
                <div className='sec_2'>
                <div className = "img_contain">
                    <img src = {voice_} className="images"/>
                    </div>
                    <Carditem text = "Summarize your text!"
                    para = "You can now summarize the text saved in your notes and make the content more readable"
                    path = "/editor"
                   />
                </div>
                <div className='sec_3'>
                    <div className = "img_contain">
                    <img src = {not} className="images"/>
                    </div>
                    <Carditem text = "Dictate your notes!"
                    para = "Bored of typing? Use our voice feature for dictating your notes now"
                    path = "/editor"
                   />
                </div>
            </div>
            
        </div>
    )
}

export default Cards

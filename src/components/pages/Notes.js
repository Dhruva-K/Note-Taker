import React, { Component } from 'react';
import Editor from '../../editor/Editor';
import Sidebar from '../../sidebar/Sidebar';
import './Notes.css';
import firebase from 'firebase/app';
import axios from 'axios';
import { removeHTMLTags } from '../../helpers';
import not from "../../images/Add notes-amico.svg";
import debounce from '../../helpers';

 class Notes extends Component {
     constructor(props) {
         super()
     
         this.state = {
              selectedNoteIndex: null,
              selectedNote:null,
              notes:null,
              
         };
         this.child = React.createRef();
     }
     
    render() {
        return (
            <div className="app-container">
                <Sidebar selectedNoteIndex={this.state.selectedNoteIndex}
                notes={this.state.notes}
                deleteNote={this.deleteNote}
                selectNote={this.selectNote}
                newNote={this.newNote}
                fileUpload = {this.fileUpload}
                ></Sidebar>
                {
                    this.state.selectedNote ?
                <Editor ref = {this.child}
                selectedNote={this.state.selectedNote}
                selectedNoteIndex={this.state.selectedNoteIndex}
                notes={this.state.notes}
                noteUpdate={this.noteUpdate}
                
                ></Editor> :
                null
                }
                
            </div>
        );
    }

    componentDidMount = () => {
        firebase
            .firestore()
            .collection('notes')
            .onSnapshot(serverUpdate => {
                const notes = serverUpdate.docs.map( _doc => {
                    const data = _doc.data();
                    data['id'] = _doc.id;
                    return data;
                });
                // console.log(notes)
                this.setState({notes:notes});
            });  //whenever something gets updated in notes collection in firebase, function pssed to onSnapshot gets called 
     
    }

    selectNote = (note,index) => this.setState({selectedNoteIndex: index,selectedNote:note});

    noteUpdate = (id,noteObj) => {
        firebase
            .firestore()
            .collection('notes')
            .doc(id)
            .update({
                title: noteObj.title,
                body: noteObj.body,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        
    }
    newNote= async(title) => {
        const note = {
            title: title,
            body : ''
        };
        const newFromDB = await firebase
            .firestore()
            .collection('notes')
            .add({
                title : note.title,
                body : note.body,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            const newID = newFromDB.id;
            await this.setState({notes: [...this.state.notes,note]});
            const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
            this.setState({selectedNote : this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex});
    }

    deleteNote = async(note) => {
        const noteIndex = this.state.notes.indexOf(note);
        await this.setState({notes: this.state.notes.filter(_note => _note!==note)})
        if(this.state.selectedNoteIndex === noteIndex){
            this.setState({selectedNoteIndex : null, selectedNote:null})
        }
        else{
            this.state.notes.length > 1 ?
            this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex -1) :
            this.setState({selectedNoteIndex : null, selectedNote:null});
        }

        firebase
        .firestore()
        .collection('notes')
        .doc(note.id)
        .delete();
        
    }
    fileUpload = (note) =>{
         console.log(note.body);
         var params={
             data: removeHTMLTags(note.body)
         }
         if(note.body !== ""){
             axios.post("http://localhost:5000/",params).then(
                 (response) =>{
                      var result = response.data;
                     console.log(result);
                     this.child.current.updateBody(result)
                 },
                 (error) =>{
                     console.log(error)
                 }
             )
                
         }
         else{
             alert("failed")
         }
    }
}

export default Notes
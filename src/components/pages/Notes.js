import React, { Component } from 'react';
import Editor from '../../editor/Editor';
import Sidebar from '../../sidebar/Sidebar';
import './Notes.css';
import firebase from 'firebase/app';



 class Notes extends Component {
     constructor(props) {
         super()
     
         this.state = {
              selectedNoteIndex: null,
              selectedNote:null,
              notes:null
         };
     }
     
    render() {
        return (
            <div className="app-container">
                <Sidebar selectedNoteIndex={this.state.selectedNoteIndex}
                notes={this.state.notes}
                deleteNote={this.deleteNote}
                selectNote={this.selectNote}
                newNote={this.newNote}></Sidebar>
                {
                    this.state.selectedNote ?
                <Editor selectedNote={this.state.selectedNote}
                selectedNoteIndex={this.state.selectedNoteIndex}
                notes={this.state.notes}
                noteUpdate={this.noteUpdate}></Editor> :
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
                console.log(notes)
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
}

export default Notes




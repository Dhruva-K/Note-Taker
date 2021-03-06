
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import Sidebaritem from '../sidebaritem/Sidebaritem'; 
import React, { Component } from 'react'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             addingNote: false,
             title: null
        }
    }
     
    render() {
        const { notes, classes , selectedNoteIndex} = this.props;
       if(notes)
       { return (
            <div className={classes.sidebarContainer}>
            
               {
                   this.state.addingNote ?
                   <div>
                       <input type='text'
                       className={classes.newNoteInput}
                       placeholder='Enter note title'
                       onKeyUp={(e)=>this.updateTitle(e.target.value)}>

                       </input>
                       <Button 
                       className = {classes.newNoteSubmitBtn}
                       onClick = {this.newNote}>Submit Note</Button>
                   </div> :
                   null

               }
               <div className = {classes.list}>
               <List>
                   {
                       notes.map((_note, _index)=>{
                           return(
                               <div key={_index}>
                                <Sidebaritem
                                _note={_note}
                                _index={_index}
                                selectedNoteIndex = {selectedNoteIndex}
                                selectNote = {this.selectNote}
                                deleteNote = {this.deleteNote}
                                fileUpload = {this.fileUpload}
                                >

                                </Sidebaritem>
                                <Divider></Divider>

                               </div>
                           )
                       })
                   }
               </List>
               </div>
               
               <div>
            <Button
               onClick = {this.newNoteClick}
               className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancel' : 'New Note'}
                   
               </Button>
               </div>
           
                
            </div>
            
            
        )}
        else{
            return(<div>Add a note!</div>)
        }
    }
    newNoteClick = ()=> {
        this.setState({title:null, addingNote: !this.state.addingNote});
    }
    updateTitle = (txt) => {
        this.setState({title: txt})
    }
    newNote = ()=> {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false});
    }
    selectNote = (n , i)=>{
        this.props.selectNote(n,i);
    }

    deleteNote = (note) => this.props.deleteNote(note);

    fileUpload = (note) => this.props.fileUpload(note);
}

export default withStyles(styles)(Sidebar);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { removeHTMLTags } from '../helpers';

 
 class Sidebaritem extends Component { 
    render() {

        const {_index,_note , classes, selectedNoteIndex} = this.props;
        return (
            <div key={_index}>
                <ListItem
                className = {classes.listItem}
                selected = {selectedNoteIndex === _index}
                alignItems='flex-start'
                onClick = {()=> this.selectNote(_note,_index)}
                >
                <div className={classes.textSection}
                
                >
                <ListItemText primary={_note.title}
                secondary = {removeHTMLTags(_note.body.substring(0,30)) + '...'}>
                </ListItemText>

                </div>
                    <EditIcon onClick={()=>this.fileUpload(_note)}
                    className = {classes.editIcon}>

                    </EditIcon>
                    <DeleteIcon onClick={()=> this.deleteNote(_note)}
                        className={classes.deleteIcon}>
                    </DeleteIcon>
                </ListItem>

            </div>
        )
    }
    selectNote = (n, i)=> this.props.selectNote(n,i);
    deleteNote = (note) =>{
        if(window.confirm(`Are you sure you want to delete: ${note.title}`))
        {
            this.props.deleteNote(note);
           
        }
    }
    fileUpload = (note)=>{
        this.props.fileUpload(note);
    }
}

export default withStyles(styles)(Sidebaritem);
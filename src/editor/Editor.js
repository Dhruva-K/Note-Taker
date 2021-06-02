
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Button } from '@material-ui/core';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Voice from './Voice';

 class Editor extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          text: '',
          title: '',
          id: '',
      
        };
      }
     
     updateBody = async (val) => {
        await this.setState({ text:val});
        this.update();
    };
    updateTitle = async(txt) =>{
        await this.setState({ title: txt})
        this.update();
    }

    update = debounce(()=> {
        this.props.noteUpdate(this.state.id,{
            title: this.state.title,
            body:this.state.text
        })
    }, 1500);


    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    componentDidUpdate = () => {
     
        if(this.props.selectedNote.id !== this.state.id){
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            })
        }
    }

    
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  }
 
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'color', 'background',
    'font',
    'align'
  ]
     
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.editorContainer}>

                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <div className={classes.Title}>
                <input 
                    className = {classes.titleInput}
                    placeholder = 'Note title..'
                    value= {this.state.title? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}
                    
                    >
                
                    
                    </input>
                    <Voice updateBody = {this.updateBody} id={this.state.id} >Voice</Voice>
                    </div>
                   
 
                <ReactQuill value={this.state.text} 
                onChange={this.updateBody}
                theme="snow"
                    modules={this.modules}
                    formats={this.formats}
                >
            
                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(Editor);

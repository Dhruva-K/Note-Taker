
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import React, { Component } from 'react'

 class EditorComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     updateBody = async (val) => {
        await this.setState({ text:val});
        this.update();
    };

    update = debounce(()=> {

    }, 1500);

     
    render() {

        const { classes } = this.props;

        return (
            <div className="editor">
                <ReactQuill value={this.state.text} 
                onChange={this.updateBody}>

                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(EditorComponent);

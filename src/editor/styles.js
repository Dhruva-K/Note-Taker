const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '30%',
      width: '100vw',
      boxShadow: '0px 0px 2px black',
      
      
    },
    titleInput: {
      
      border:'none',
      fontSize: '24px',
      width: '80%',
      backgroundColor:'#3954EE ',
      color: 'white',
      boxSizing: 'border-box',
      
      
    },
    Title:{
      left: '400px',
      paddingLeft: '50px',
      height: '50px',
      backgroundColor: '#3954EE ',
      width: '100%',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      
    },

    but: {
      width: '50px',
      height: '20px'
    },
    editIcon: {
      position: 'absolute',
      left: '310px',
      top: '12px',
      color: 'white',
      width: '10',
      height: '10'
    },
    editorContainer: {
     
      height: '100%',
      boxSizing: 'border-box',
      
   
    },
   
  });
  
  export default styles;
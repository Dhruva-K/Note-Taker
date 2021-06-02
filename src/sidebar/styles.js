const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'grey',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newNoteBtn: {
      
      width: '91%',
      height: '35px',
    
      margin: '10px',
      borderBottom: '1px solid black',
      borderRadius: '25px',
      backgroundColor: '#242424',
      color: 'white',
      '&:hover': {
        backgroundColor: 'grey'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
     
      float: 'left',
     
    },
    list:{
      
      width: '100%',
      height:"80%",
      overflowY: 'scroll',
      overflowX: 'hidden'
    },
    newNoteInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      paddingLeft: '5px',
      // '&:focus': {
      //   outline: '2px solid rgba(81, 203, 238, 1)'
      // }
    },
    newNoteSubmitBtn: {
      height:'30px',
      marginLeft: '60px',
      width: '50%',
      backgroundColor: '#242424',
      borderRadius: '25px',
      color: 'white'
    }
    
  });
  
  export default styles;
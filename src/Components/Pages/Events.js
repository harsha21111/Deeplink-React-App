import React from 'react';
import Button from '@material-ui/core/Button';
import './Common.css';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventDialog from './EventDialog';


const columns = [
    { 
      field: 'id', 
      headerName: 'Event ID',
      width: 150 
    },
    {
      field: 'eventName',
      headerName: 'Event Name',
      width: 150,
    },
    {
      field: 'eventDescription',
      headerName: 'Event Description',
      width: 150,
    },
    {
      field: 'organization',
      headerName: 'Organization',
      width: 150,
    },
    {
        field: 'edit',
        headerName: 'Edit',
        width: 150,
    },
    {
        field: 'delete',
        headerName: 'Delete',
        width: 150,
    }
  ];
   
class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error:null,
      isLoaded: null,
      dataSource: [],
      open:false
    }
    this.onOpenDialog = this.onOpenDialog.bind(this);
    this.onCloseDialog = this.onCloseDialog.bind(this);
  }

  onOpenDialog() {
    this.setState({open: this.props.openDialog});
 }

 onCloseDialog() {
    this.setState({open:false});
 }


  componentDidMount(){
    fetch('https://localhost:44319/api/campaignapi')
    .then(res => res.json())
    .then(result => {
        this.setState({
            isLoaded:true,
             dataSource: JSON.parse(JSON.stringify(result).replaceAll('campaignId','id'))
            
        })
    },
    (error) => {
        this.setState({
            error,
            isLoaded:true
        })
    }
)       
}

  render() {
    const {error, isLoaded, dataSource, open} = this.state;
        if(error){
          return <div>
              {error.message}
          </div>
        }
        else if(!isLoaded){
            return <div>
                Loading ...
            </div>
        }
        else{
    return (
  <React.Fragment>
  <CssBaseline />
  <Container>
  <Typography component="div" style={{ height: '100vh', width:"157vh"}}>
    <div className='btn'>
          <Button variant="contained" color="primary" onClick={() => this.setState({open: true})}>
              Create Event
          </Button>
    </div>
    <Dialog
    open={open}
    aria-labelledby="form-dialog-title"
    >
    <div style={{backgroundColor:'lightgray'}}>
    <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
    </div>
        <DialogContent>
          <EventDialog />
        </DialogContent>
        <DialogActions>
        <Button color="primary" type="submit" variant='contained'>
           Save
        </Button>
          <Button color="primary"  variant='contained' onClick={() => this.setState({open: false})}>
            close
          </Button>
        </DialogActions>
      
    </Dialog>
    
  <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"  
    >
      <Grid item xs>
      <div style={{ height: '50vh', width: '130vh' }}>
      <DataGrid
      rows={dataSource}
      columns={columns}
      />
      </div>
      </Grid>

      </Grid>

  </Typography>
  </Container>
  </React.Fragment>
  );
  }
}
}
export default Events;








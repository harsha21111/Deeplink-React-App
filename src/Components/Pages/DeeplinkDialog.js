import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Link from '@material-ui/core/Link';
import './CreateCampaignDialog.css';
import Button from '@material-ui/core/Button';

class DeeplinkDialog extends Component{
constructor(props){
	super(props)
	this.state = { baseUrl:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
	event.preventDefault()
	console.log(this.state);
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}


render(){
	return(
	<div>
      <Form onSubmit={this.handleSubmit}>
	  <div className="form-group">
		<input type="text"
		className="form-control"
		placeholder="Base Url"
		name='baseUrl'
	 	value = {this.state.baseUrl}
	 	onChange={this.handleChange}
		/>
		</div>
		<Link href="#">
        Add Parameters
      </Link>
	  <div className='btn1'>
          <Button variant="contained" color="primary">
              Generate Link
          </Button>
    </div>
		
      </Form>

    </div>

	)
}
}

export default DeeplinkDialog;




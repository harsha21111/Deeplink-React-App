import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './CreateCampaignDialog.css'

class CreateCampaignDialog extends Component{
constructor(props){
	super(props)
	this.state = { eventName:'',campaign:'',description:'',  value:'', source:'', organization:'',param1:'',param2:'',param3:''}
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

        <div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Event Name"
		name='eventName'
	 	value = {this.state.eventName}
	 	onChange={this.handleChange}
		 />
		</div>
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Campaign"
		name='campaign'
	 	value = {this.state.campaign}
	 	onChange={this.handleChange}
		/>
		</div>
		</div>

		<div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Value"
		name='value'
	 	value = {this.state.value}
	 	onChange={this.handleChange}
		 />
		</div>
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Organization"
		name='organization'
	 	value = {this.state.organization}
	 	onChange={this.handleChange}
		/>
		</div>
		</div>
		<div className="row">
		<div className="col">
        <TextareaAutosize 
        className="form-control"
        placeholder="Description"
        name='description'
        value = {this.state.description}
        onChange={this.handleChange}
          />
		</div>
		</div>
        <div className="row">
		<div className="col">
		<TextareaAutosize 
        className="form-control"
        placeholder="param1"
        name='param1'
        value = {this.state.param1}
        onChange={this.handleChange}
          />
		</div>
		<div className="col">
		<TextareaAutosize 
        className="form-control"
        placeholder="param2"
        name='param2'
        value = {this.state.param2}
        onChange={this.handleChange}
          />
		</div>
        <div className="col">
		<TextareaAutosize 
        className="form-control"
        placeholder="param3"
        name='param3'
        value = {this.state.param3}
        onChange={this.handleChange}
          />
		</div>
		</div>
      </Form>

    </div>

	)
}
}

export default CreateCampaignDialog;




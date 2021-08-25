import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './CreateCampaignDialog.css'

class CreateCampaignDialog extends Component{
constructor(props){
	super(props)
	this.state = { campName:'',description:'',  cost:'', source:'', organization:''}
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
		placeholder="Campaign name"
		name='campName'
	 	value = {this.state.campName}
	 	onChange={this.handleChange}
		/>
		</div>
		<div className="form-group">
		<input type="text"
		className="form-control"
		placeholder="Description"
		name='description'
	 	value = {this.state.description}
	 	onChange={this.handleChange}
		/>
		</div>

		<div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Cost"
		name='cost'
	 	value = {this.state.cost}
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
		<input type="text"
		className="form-control"
		placeholder="Source"
		name='source'
	 	value = {this.state.source}
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




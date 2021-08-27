import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Dash.css'

class Dashboard extends Component{
constructor(props){
	super(props)
	this.state = { fname:'',lname:'',  address:'', stAddress:'', state:'',country:'',zipcode:'', phoneNo:'',hpn:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
	//const { fname, lname, address, stAddress, state, country,zipcode, phoneNo ,hpn} = this.state
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
		<div className="Container">
		<div>
			<h4> Employee Personal Info</h4>
		</div>

      <Form onSubmit={this.handleSubmit}>
		<div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="First name"
		name='fname'
	 	value = {this.state.fname}
	 	onChange={this.handleChange}

		 />
		</div>
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Last name"
		name='lname'
	 	value = {this.state.lname}
	 	onChange={this.handleChange}
		/>
		</div>
		</div>

        <div className="form-group">
		<input type="text"
		className="form-control"
		placeholder="Address"
		name='address'
	 	value = {this.state.address}
	 	onChange={this.handleChange}
		/>
		</div>
		<div className="form-group">
		<input type="text"
		className="form-control"
		placeholder="Street Address"
		name='stAddress'
	 	value = {this.state.stAddress}
	 	onChange={this.handleChange}
		/>
		</div>

		<div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="State"
		name='state'
	 	value = {this.state.state}
	 	onChange={this.handleChange}
		 />
		</div>
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Country"
		name='country'
	 	value = {this.state.country}
	 	onChange={this.handleChange}
		/>
		</div>
		</div>
        <div className="form-group">
		<input type="text"
		className="form-control"
		placeholder="Zip/Postal Code"
		name='zipcode'
	 	value = {this.state.zipcode}
	 	onChange={this.handleChange}
		/>
		</div>
		<div className="row">
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Phone Number"
		name='phoneNo'
	 	value = {this.state.phoneNo}
	 	onChange={this.handleChange}
		 />
		</div>
		<div className="col">
		<input type="text"
		className="form-control"
		placeholder="Home Phone Number"
		name='hpn'
	 	value = {this.state.hpn}
	 	onChange={this.handleChange}
		/>
		</div>
		</div>
		<div>
		 <Button variant="primary" type="submit">
           Save
        </Button> 
		</div>
      </Form>


    </div>

	)
}
}

export default Dashboard;




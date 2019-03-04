import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
			item: '',
			cost: ''  
	  }
  
	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);     
  
	}
  
	handleInputChange(event) {
	  const target = event.target;
	  const value = target.value;
	  const name = target.name;
  
	  this.setState({
			[name]: value
	  });
	}
  
	handleSubmit(event) {
		event.preventDefault();
		if(this.state.item === '' || this.state.cost === ''){
			alert("Please Enter Item and Cost");
			return;
		}
		this.props.addItem( {description:this.state.item, cost:this.state.cost});
		this.setState({
			item: '',
			cost: ''
		});
	}
  
	render() {
	  return (
			
		<div>
		  <form onSubmit={this.handleSubmit} className="col-sm-10 offset-sm-1 fixed-bottom" id="submitForm">
			<div className="form-group row">
			  <div className="col-sm-1 offset-sm-2">
				<label htmlFor="item">Item: </label>
			  </div>
			  <div className="col-sm-7">
				<input type="text" className="form-control" id="item" name="item" placeholder="Item" value={this.state.item} onChange={this.handleInputChange} />
			  </div> 
			</div>
			<div className="form-group row"> 
			  <div className="col-sm-1 offset-sm-2">
				<label htmlFor="cost">Cost: </label>
			  </div>
			  <div className="col-sm-5">  
				<input type="number" className="form-control" id="cost" name="cost" placeholder="Cost" value={this.state.cost} onChange={this.handleInputChange} />
			  </div>
			  <br className="d-block d-sm-none d-md-none d-lg-none d-xl-none" />
			  <br className="d-block d-sm-none d-md-none d-lg-none d-xl-none" />
			  <button type="submit" className="btn btn-primary col-sm-2">Add Entry</button>
			</div>
		  </form>
		</div>
	  );
	}
  }

  export default Form;
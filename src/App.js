import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import Form from './component/Form'
import  addItem   from './Actions/addItem';
import fetchAll from './Actions/fetchAll';
import { withRouter } from 'react-router-dom'
import DatewiseItemList from './component/DatewiseItemList';

class App extends Component {
 
  componentWillMount(){
    this.props.fetchAll();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">          
          <div className="col-md-12">
            <DatewiseItemList datewiseItems={this.props.datewiseItems} />
          </div>
          <div className="row">
            <Form addItem={this.props.addItem} />
          </div>
          </div>
      </div>
     </div>
    );
  }
}

const mapDispatchToProps= dispatch => {
    return{
      addItem : item => {
        dispatch(addItem(item))
      },
      fetchAll : () => {
        dispatch(fetchAll())
      }
    }
}

const mapStateToProps= state => {
  return{
    datewiseItems:state.datewiseItems
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

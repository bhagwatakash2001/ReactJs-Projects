// import logo from './logo.svg';
import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counter from './components/counter';
import Counters from './components/counters';

class App extends Component {

  state = {
    // define counter array, id is to uniquely identify each component
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },

    ]
  }
  //function to delete counter
  handleDelete = (counterId) => {
    console.log('Delete event handler called..', counterId)
    const counters = this.state.counters.filter(c => c.id != counterId);
    // this.setState({ counters:counters })
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });
    console.log("Reset :", this.state.counters)
  };

  handleIncrement = counter => {
    // console.log(counter);
    //cloning the counters array so that we can modify it-directly not allowd in react
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
    console.log("handleIncremnt:", this.state.counters[index])

  }
  render() {

    return (
      <React.Fragment>

        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}  />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>

      </React.Fragment>
    );
  }
}

export default App;

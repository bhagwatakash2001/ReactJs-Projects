import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     // count: 0,

    //     //this line is for another component `counters`
    //     value: this.props.counter.value,

    //     // imgUrl: 'https://picsum.photos/200',
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };

    componentDidUpdate(prevProps, prevState){
        // console.log('prevProps', prevProps)
        // console.log("prevState",prevState)
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call to server to get new data
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount')
    }

    my_css = {
        fontSize: 30,
        fontWeight: 'bold',

    }
    //Using constructor to bind event handler mannually
    // constructor(){
    //     super()
    //     console.log('Constructor',this)
    //     //setting this referance here and calling new instance of the function
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // }
    // Can be done automatically using arrow fucntion refer handleIncrement event
    formatCount() {
        // const { value } = this.state;
        const { value } = this.props.counter;
        // return this.state.count === 0? 'Zero' : this.state.count
        return value === 0 ? 'Zero' : value
    }

    getBadgeClasses() {
        let classes = "badge m-3 p-2 badge-";
        // return classes += (this.state.value) === 0 ? 'warning' : 'primary';
        return classes += (this.props.counter.value) === 0 ? 'warning' : 'info';

    }
    //Method to implement if-else functionality
    renderTags() {

        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag} > {tag} </li>)}</ul>

    }
    // method to increment varibale count
    // handleIncrement(){
    //     console.log('Increment clicked')
    // }

    // handleIncrement = () => {
    //     // this.state.count++;
    //     //with above cobe the increment in the count in the state obect doesnt get rendered

    //     this.setState({ value: this.state.value + 1 });
    //     console.log('Increment', this)
    //     console.log(this.state.value)
    // }
    
    

    render() {
        // #1 let classes = "badge m-2 badge-"
        // classes += (this.state.count === 0) ? "warning" : "primary";

        //#2
        let classes = this.getBadgeClasses();
        return (

            <div>

                {/* `children props ` : this line is in contex counters component */}
                {/* {this.props.children} */}
                {/* <h4> {this.props.id} </h4> */}

                {/* <img src={ this.state.imgUrl }/>  */}

                {/* applying inline css with jsx defined css keywords like `className` */}
                {/* <span className="badge badge-primary m-2" >{ this.formatCount()}</span> */}

                <span className={classes} > {this.formatCount()} </span>

                {/* #3 <span className={ this.getBadgeClasses() } > { this.formatCount()} </span> */}

                {/* `classes` is varible here */}

                {/* <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button> */}
                <button 
                // onClick={this.handleIncrement} 
                onClick={ () => this.props.onIncrement( this.props.counter ) } 
                className="btn btn-primary btn-sm">
                    Increment
                </button>

                {/* <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button> */}
                <button onClick={ ()=> this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>


                {/* applying custom syles using dynamic data passing from object [my_css] */}
                {/* <button style = { this.my_css } className="btn btn-danger btn-sm">Decrement</button> */}

                {/* <button style = {{ fontSize:25, }} className="btn btn-success btn-sm">Decrement</button> */}

                {/* rendering a list here */}
                
                    {/* { this.state.tags.map(tag => <li key={ tag }> { tag } </li>) } */}
                    {/* here key is optional,react give warnings in the cosole if not included 
                    the parameter key, code below this line also works fine*/}
                    {/* { this.state.tags.map(tag => <li> { tag } </li>) } */}                

                {/* {this.renderTags()} */}

            </div>
        );
    }
}

export default Counter;
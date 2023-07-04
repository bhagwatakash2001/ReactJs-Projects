import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() {
        
        const { onReset,counters,onDelete, onIncrement } = this.props;

        return (
            <div className="container ">                    
                {/* Rendering 4 counters on webpage dynamically with the help of array,
                and map. Here `counters` array ele's are getting mapped into a `Counter` component */}
                { counters.map(
                    counter => (
                        <Counter 
                            key={counter.id} 
                            onDelete = {onDelete}  
                            onIncrement = {onIncrement}
                            // value = {counter.value} 
                            // id = {counter.id}
                            counter = {counter}
                            >                           
                        </Counter>
                    )
                    
                    ) 
                }
                <btutton
                    onClick={ onReset }
                     className="btn btn-light border-dark btn-sm col-10 ml-2 mt-3">                    
                    Reset                    
                    </btutton>
            </div>  

        );
    }


}
export default Counters;
import React, {Fragment} from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component{
//    constructor() {
//        super();
//        this.goToStore = this.goToStore.bind(this)
//    }
    myInput = React.createRef();
    goToStore =event => {
        //Stop The form from submiting
        event.preventDefault();
        // get the text from the input
        const storeName = this.myInput.value.value;
        // change page to store/:storeId
        this.props.history.push(`/store/${storeName}`);
    }; 
    render(){
        return (
        <Fragment>  
        <form className="store-selector" onSubmit={this.goToStore}>
           <h2>Please Enter A Store</h2>
           <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={ getFunName() } />
           <button type="submit">Visit Store →</button>
         </form>
         </Fragment>  
        );
    }
}

export default StorePicker;
import React from 'react';
import AddFishForm from './AddFishForm';

 class EditFishForm extends React.Component {
     render() {
         return (<div className="fish-edit">
        <input type="text" name="name"/>
        <input type="text" name="price"/>
        <select type="text" name="status">
        <option value="available">Fresh!</option>
        <ption value="unavailable">Sold Out!</ption>
        </select>
        <textarea  name="desc"/>
        <input type="text" name="image"/>      
         </div>
     );
    }
 }

 export default EditFishForm;
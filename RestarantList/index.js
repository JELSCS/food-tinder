import React, { Component } from 'react'
import RestrantCard from '../RestrantCard/RestrantCard'
import { Alert } from 'antd'
export default class index extends Component {
   // "Restaurant ID"
  //   "Restaurant Name"
  //   "Cuisines" 
  //    we can add this option or delete
  //   "Average Cost"
  //   "Currency" : "Botswana Pula(P)",
  //  
  //   "Online delivery" : "Yes/No", 
  //   "Table booking" : "Yes/No", 
  //   "Aggregate rating"
  //   "Rating color" :
  //   "Rating text" 
  //   "Votes" Reviews
 

  render() {

    
      const data__ = this.props.data;

     let y =  data__.map((d,i) =>{

       
       return(
         <div  key={i} ><RestrantCard datanew={d} />  <br></br> </div>
        
       )

      });
     const r  =  (y.length > 0 ) ? (  y ) : (    <Alert type="error"  message="No more Reseults found !!" banner /> )
 

    return (
      <div id="Restrantresult">
     { r }
       
      </div>
    )
  }
}

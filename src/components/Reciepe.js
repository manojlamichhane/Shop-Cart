import React, { Component } from 'react';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Reciepe.css'

class Reciepe extends Component {
  render() {

   let addedItems = this.props.addedItems.map((item)=>{
         return(                       
                <TableBody>
                    <TableRow key={item.id}>
                        <TableCell align="right">{item.title}</TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{item.price*item.quantity}</TableCell>                        
                    </TableRow>
                </TableBody>
                )
                })

    return (
    <div className="cont">
    <TableContainer >
        <Table>
            <TableHead>
             <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Amount</TableCell>
             </TableRow>
            </TableHead>
            {addedItems}
        </Table>
    </TableContainer>    
    Total:{this.props.Total}
    </div>  
    );
  }
}


const mapStateToProps = (state) => {
return{
    Total:state.total,
    addedItems:state.addedItems
}
}
export default connect(mapStateToProps)(Reciepe); 
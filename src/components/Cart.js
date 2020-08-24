import React, { Component } from 'react';
import {connect} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import './Cart.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {ADDQUANTITY,SUBQUANTITY,REMOVEITEM} from '../Redux/Cart/cartActions'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

class Cart extends Component {

    handleAdd = (id) => {
        this.props.addquantity(id);
    }

    handleSub = (id) => {
        this.props.subquantity(id);
    }
    handleRemove = (id) => {
        this.props.removeitem(id)
    }
    render() {

        let addedList = this.props.items.map((item)=>{
            return(
                <div className="container">
                <List key={item.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar  src={item.img} />
                        </ListItemAvatar>
                      <ListItemText>
                        {item.title}
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                        Quantity:{item.quantity}
                        </ListItemText>   
                      <IconButton component={Link} to="/cart">
                        <AddIcon onClick={()=>this.handleAdd(item.id)}/> 
                      </IconButton>
                      <IconButton component={Link} to="/cart"> 
                        <RemoveIcon onClick={()=>this.handleSub(item.id)}/>
                      </IconButton>
                      <IconButton component={Link} to="/cart">
                        <DeleteIcon onClick={()=>this.handleRemove(item.id)}/>
                      </IconButton>
                    </ListItem>
              </List>                 
              </div>
            )
        })

        return (
            <div>
            <h3>You have ordered</h3>
            {addedList}
            <Button variant="contained" color="primary" component={Link} to ="/Reciepe">
              Next
            </Button>      
            </div>
        );
    }
}
const mapStateToProps = (state) => {
return{
    items:state.addedItems,
    Total:state.total
}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addquantity: (id) => dispatch(ADDQUANTITY(id)),
        subquantity: (id) =>dispatch(SUBQUANTITY(id)),
        removeitem: (id) =>dispatch(REMOVEITEM(id))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Cart);
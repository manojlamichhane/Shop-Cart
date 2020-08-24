import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Shop.css';
import {ADDTOCART} from '../Redux/Cart/cartActions'

class Shop extends Component {
  
  handleClick = (id) => {

      this.props.addtocart(id)
    
  }

render() {

    let itemList = this.props.Items.map(item=>{
    return(
        <div key={item.id}>
            <Grid item sm={12} md={12}>
            <Card>
            <CardActionArea>
                <CardMedia  
                component="img" 
                image={item.img} 
                title={item.title}
                width="250"
                height="250"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{item.desc}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Typography>Price:{item.price}</Typography>
            <Button size="small" color="primary" onClick={() => this.handleClick(item.id)}>Add to the Cart </Button>
            </CardActions>
            </Card>
            </Grid>
         </div>
        )
    })

    return (
        <div>
          <h3>Our items</h3>
                <div className="container">
                <Grid container spacing={8}>           
                    {itemList}
                </Grid>
                </div>
        </div>
      );
  }
}
const mapStateToProps = (state)=>{
    return {
      Items: state.items
    }
  }
const mapDispatchToProps = (dispatch) =>{
return{
  addtocart: (id) => dispatch(ADDTOCART(id))
}
} 

export default connect (mapStateToProps,mapDispatchToProps)(Shop)
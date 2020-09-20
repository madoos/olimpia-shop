import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { Product } from '@store/products/interfaces'

const useStyles = makeStyles({
  root: {
    minHeight: 300,
    maxWidth: 300,
    cursor: 'pointer'
  },
  title: {
    fontSize: 14,
  },
  img: {
    width: 250,
    height: 250
  }
});


const ProductPreview: React.FunctionComponent<Product> = (product) => {
    const classes = useStyles()

    return (
      <Card className={classes.root} >
        <CardContent>
          <img src={product.photos[0]} className={classes.img}/>       
          <h3>{product.name}</h3>
          <Typography variant="body2" component="p">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Chip label={product.price} />
        </CardActions>
      </Card>
    );
}
 
export default ProductPreview;










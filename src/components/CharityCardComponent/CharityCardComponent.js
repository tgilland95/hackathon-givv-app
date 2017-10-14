import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



export default class CharityCardComponent extends Component {
  Background = "http://thesource.com/wp-content/uploads/2016/03/ATCQ-low-end-inside-cover-LP1.jpg";

  constructor(props) {
    super(props)
  }
  render() {
    return (
    <Card style={{maxWidth: '345px', margin: '20px'}}>
      <CardMedia className={this.media} style={{height: '200px', backgroundImage:`url(${this.Background})`}} title="Contemplative Reptile"/>
      <CardContent>
        <Typography type="headline" component="h2">
          Project Name
        </Typography>
        <Typography component="p">
          Project description lorem ipsum
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
  }
}

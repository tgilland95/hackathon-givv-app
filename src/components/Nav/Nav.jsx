import Menu, { MenuItem } from 'material-ui/Menu'
import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

class GivvNav extends Component {
  state = {
    anchorEl: null,
    open: false
  }
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }
  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" onClick={this.handleClick}>
              <MenuIcon />
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
              >
                <MenuItem onClick={this.handleRequestClose}>Company Info</MenuItem>
      
                <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
              </Menu>
            </IconButton>
            <Typography type="headline" color="inherit">
              {' '}
              GIVV{' '}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default GivvNav

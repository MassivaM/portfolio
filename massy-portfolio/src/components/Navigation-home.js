import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import place from '../assets/images/place.svg'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const styleSheet = {
  root: {

    padding:0,
    margin:0
  },

  list : {
    width : 100,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer",
  },
  logo:{
    paddingLeft:10,
    margin: 0

  },
  list:{
  color:'black',
  textDecoration: 'none',


  },buttons:{
    marginLeft:'auto',
    color: 'black', 
 
  },
  button:{
    margin:10,
    fontSize: 12,
  },
  links:{
    fontSize:25,
    color: 'black', 
    textDecoration: 'none',
    fontFamily: 'Bebas Neue Book',
    
    padding:0,
    '&:hover': {
      color: 'black'
   }
  },
 

  
}


//array with nav bar parts
const navLinks = [
  {
      title : 'About', 
      path: '/about'
  },
  {
      title: "Contact",
      path: '/contact'
  }, 
  {
    title: "Home",
    path: '/'
}, 

  
  

]


class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 880){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 880){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div className={styleSheet.root}>
        <AppBar position="fixed"  style={{ margin: 0, padding: 0, background:'#FFFBF4',height:60, boxShadow: 'none'}} >
          <Toolbar style={{background: '#FFFBF4'}}>
          
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

            
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>
              

         
            <List className = {this.props.classes.list}>
            {navLinks.map((link,index) =>(
               <ListItem><Link to={link.path} className={styleSheet.links} style={{textDecoration:'none', color:'black'}}>{link.title}</Link> </ListItem>
               ))}
          
               
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar position="fixed"  style={{flexGrow:0, margin: 0, padding: 0, background:'#FFFBF4', boxShadow: 'none', height:60}}>
        <Toolbar>
        <Button className={classes.logo}>

                  <Link to='./about' className={classes.links}>About</Link>
       
            </Button>

            <div className={classes.buttons}>
            
            
                <Button className={classes.button} >
                  

                 
                <a  className={classes.links} href={`mailto:${'mahamlimassy@gmail.com'}`}>Contact</a>          

                        
            </Button>
            <Button className={classes.button}>
                  

         
                              
                  <Link to='./' className={classes.links}><img src={place} alt="logo"></img></Link>
                        
            </Button>

            <Button className={classes.button}>
                  

         
                              
                 <a href="https://www.linkedin.com/in/massy-mahamli-47180a14a/"><img src={linkedin} alt="logo"/></a>
                        
            </Button>
            <Button className={classes.button}>
                  

         
                              
                 <a href="https://github.com/MassivaM"><img src={github} alt="logo"/></a>
                        
            </Button>
           
              </div>

        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);

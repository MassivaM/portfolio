import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import kontrol from '../assets/images/kontrol.svg'
import listing from '../assets/images/listing.svg'
import cirque from '../assets/images/cirque.svg'
import explorance from '../assets/images/explorance.svg'
import SVG from './SVG.js'
import SVG2 from './SVG-arrow.js'
import SVG3 from './SVG-arrow2.js'
import SVG4 from './SVGbug.js'
import SVG5 from './SVG-arrow3.js'
import SVG6 from './SVG-lb.js'
import SVG7 from './SVG-cirque-rpi.js'
import SVG8 from './SVG-cirque-storm.js'
import SVG9 from './SVG-arrow4.js'
import SVG10 from './SVG-arrow5.js'
import SVG11 from './SVG-arrow6.js'
import SVG12 from './SVG-arrow7.js'
import SVG13 from './SVG-explorance.js'
import SVG14 from './SVG-jec.js'
import SVGlink1 from './SVG-rpi-link.js'
import SVGlink2 from './SVG-storm-link.js'
import SVGlink3 from './SVG-jec-link.js'
import jec from '../assets/images/jec.svg'

import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px',
    margin:'0',
    background:"#FFFBF4",
    border:'none', 
    boxShadow:'none',
    alignContent:'left', 
    alignItems:"left"
  },
 root:{
   padding:'6px',
 },
 h1:{
   padding:0
 },
  primaryTail: {
    backgroundColor: "#FBC531",
  },
 
}));



export default function CustomizedTimeline() {
  const classes = useStyles();

  
  return (
    <Timeline align="alternate" z-index="2">
    
      <TimelineItem>
     
        <TimelineOppositeContent>
     <SVG/>
          <Typography variant="outlined"color="textSecondary">
          <SVG2/>
          2020 
          <SVG3/>
          <SVG4/>
            
          </Typography>
        </TimelineOppositeContent>
      
        <TimelineSeparator>
          
          <TimelineDot color="#FBC531" variant="outlined">
            <FlashOnOutlinedIcon />
          </TimelineDot>
          
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
       
        <TimelineContent style={{align:'left'}}>
       
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            
              <img style={{margin:0, padding:0}}src={kontrol} alt="logo"/> 
            </Typography>
            <Typography style={{fontFamily:'Riccione-DemiBold', padding:'50', textJustify: 'interword'}}>Full-Stack Developer Intern<br></br>
Kontrol Energy Corp. <br></br>
June 2020-Today</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
     
      <TimelineItem>
        <TimelineOppositeContent>

          <Typography variant="outlined" color="textSecondary">
            <SVG6/><SVG5/>
            2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#FBC531" variant="outlined">
            <ListOutlinedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            <img style={{margin:0, padding:0}}src={listing} alt="logo"/>
            </Typography>
            <Typography  style={{fontFamily:'Riccione-DemiBold', padding:'50', textJustify: 'interword'}}>Frontend Developer Intern<br></br>
            Listing Bird <br></br>
            May 2020 - Today | Part-time</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
        <SVG7/>
        <SVGlink1/>
          <Typography variant="outlined"color="textSecondary">
            <SVG9/>
           
            2019
            <SVG10/>
            <SVG8/>
            <SVGlink2/>
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="#FBC531" variant="outlined">
            <Brightness5OutlinedIcon/>
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
       
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            <img style={{margin:0, padding:0}}src={cirque} alt="logo"/>
            </Typography>
            <Typography  style={{fontFamily:'Riccione-DemiBold', padding:'50', textJustify: 'interword'}}>Software Engineering Intern | Innovation<br></br>
           Cirque du Soleil <br></br>
            May 2019 - March 2020</Typography>
           </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="outlined"color="textSecondary">
            <SVG13/>
            <SVG11/>
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="FBC531" variant="outlined">
       <ExploreOutlinedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.primaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <img style={{margin:0, padding:0}}src={explorance} alt="logo"/>
            </Typography>
            <Typography  style={{fontFamily:'Riccione-DemiBold', padding:'50', textJustify: 'interword'}}>Community Engagement and learning Center intern<br></br>
            Explorance<br></br>
            May 2018 - August 2018</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>

      <TimelineOppositeContent>
        
          <Typography variant="outlined"color="textSecondary">
            
            2017
            <SVG12/>
            <SVG14/>
            <SVGlink3/>
            
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="FBC531" variant="outlined">
       <HealingOutlinedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <img style={{margin:0, padding:0}}src={jec} alt="logo"/>
            </Typography>
            <Typography  style={{fontFamily:'Riccione-DemiBold', padding:'50', textJustify: 'interword'}}>M.I.S.S.I.V..E Program coordinator<br></br>
            Montreal Jewish Eldercare Center<br></br>
            June 2017 - August 2018</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    FormLabel,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    Paper,
    Button,
    Slider,
    Typography
} from '@material-ui/core'
import github from '../assets/images/github2.svg'
import website from '../assets/images/website.svg'
import film from '../assets/images/film.png'
import Thankloop from '../assets/images/thankloop.png'
import Frosh from '../assets/images/Frosh.png'
import ai from '../assets/images/ai.png'
import car from '../assets/images/car.png'
import closet from '../assets/images/closet.png'
import android from '../assets/images/android.svg'
import rpi from '../assets/images/rpi.svg'
import objective from '../assets/images/objective-c.svg'
import firebase from '../assets/images/firebase.svg'
import python from '../assets/images/python.svg'
import java from '../assets/images/java.svg'
import javascript from '../assets/images/javascript.svg'
import graphql from '../assets/images/graphql.svg'
import react from '../assets/images/react.svg'
import mysql from '../assets/images/mysql.svg'
function Project(props)
{
    return (
        <Paper 
            className="Project"
            style={{
                backgroundImage: props.item.image,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                  
               
            }}
            elevation={10}
        >
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            
            <Button className="CheckButton">
                <a href={props.item.link}><img src={github} alt="logo"/></a>
            </Button>
           {props.item.link2 !== undefined && 
                <Button className="CheckButton">
                <a href={props.item.link2}><img src={website} alt="logo"/></a>

            </Button>

            }
            <br></br>


{props.item.icon !== undefined && props.item.icon2 !== undefined && props.item.icon3 !== undefined && props.item.icon4 !== undefined ? 
  <div id="banner"> 
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon.toLowerCase()}.svg`)}/> </div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon2.toLowerCase()}.svg`)}/></div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon3.toLowerCase()}.svg`)}/></div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon4.toLowerCase()}.svg`)}/></div>
  </div>
  :
  props.item.icon !== undefined && props.item.icon2 !== undefined && props.item.icon3 !== undefined ? 
  <div id="banner"> 
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon.toLowerCase()}.svg`)}/> </div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon2.toLowerCase()}.svg`)}/></div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon3.toLowerCase()}.svg`)}/></div>
  </div>
  :
  props.item.icon !== undefined && props.item.icon2 !== undefined ?
  <div id="banner"> 
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon.toLowerCase()}.svg`)}/> </div>
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon2.toLowerCase()}.svg`)}/></div>
  </div>
  :
  props.item.icon !== undefined && 
  <div id="banner"> 
  <div className="inline-block"><img src={require(`../assets/images/${props.item.icon.toLowerCase()}.svg`)}/> </div>
  </div>

  
}





        </Paper>
     
 
    )
}

const items = [
    {
        name: "Thankloop",
        description: "Enhance your wellbeing and those of others by sending positive, thank you messages to workers around the world. Developed using React and GraphQL with a mySQL database.",
        image: `url(${Thankloop})`,
        link: "https://github.com/MassivaM/thankloop",
        icon : 'react',
        icon2: 'graphql', 
        icon3: 'mysql',
        icon4: 'javascript'

        
    },
    {
        name: "McGill Engineering 2020 Orientation Week website",
        description: "Official website for McGill Engineering's Frosh 2020, links to the external registration website and gives information about OWeek through a blog , an FAQ and a Resources page. Built with React.",
        color: "#7D85B1",
        image: `url(${Frosh})`,
        link: "https://github.com/MassivaM/frosh2020", 
        link2 :"https://oweek.mcgilleus.ca/#/home", 
        icon: 'react', 
        icon2: 'javascript'
    },
    {
        name: "Magic Pen",
        description: "An Apple Pencil compatible iOS application that makes it easier for filmmakers to create.",
        color: "#CE7E78",
        image: `url(${film})`,
        link: "https://github.com/MassivaM/Magic-Pen", 
        icon: 'objective-c'
    },
    {
        name: "Saboteur Auto-Player",
        description: "Saboteur auto-player implemented using the Monte Carlo Search Tree Algorithm.",
        color: "#C9A27E",
        image: `url(${ai})`,
        link: "https://github.com/annyhang/SaboteurComp424",
        icon: 'java'
    },
    {
        name: "Karpool",
        description: "An Android app which allows users to find people to car pool long distances with. Stats and information available for administrators to look at on a Vue.JS web application. ",
        color: "#C9A27E",
        image: `url(${car})`,
        link: "https://github.com/ECSE321-Fall2018/t14-web", 
        icon: 'javascript', 
        icon2: 'android'
    }, 
    {
        name: "Closet Styler",
        description: "A python app that displays tops, bottom and shoes in users' closets, meant to be used as a Raspberry Pi app. Uses Python and a Firebase database.",
        color: "#C9A27E",
        image: `url(${closet})`,
        link: "https://github.com/MassivaM/closet-styler", 
        icon: 'python', 
        icon2: 'firebase', 
        icon3: 'rpi'
    }
]

export default class MyProjectsExample extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 5000,
            animation: "fade",
            indicators: true,
            timeout: 0,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false
        }

        autoBind(this);
    }

 

    

    render()
    {
        return (
            <div style={{marginTop: "50px", color: "#494949", alignItems:"center"}}>
                

                <Carousel 
                    className="SecondExample"
                
                    indicators={this.state.indicators}
                    
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    
                >
                    {
                        items.map( (item, index) => {
                            return <Project item={item} key={index}/>
                        })
                    }
                </Carousel>


                
                
            </div>
        )
    }
}
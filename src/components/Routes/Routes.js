import React,{Fragment} from 'react'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
//import render from 'react-router'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Header from '../Header/Header'
import {RoomContext} from '../../App' 
var home={
   header1:'WELCOME TO LUXRIOUS',
   header2:'HOTELS',
   btn:'OUR ROOMS',
   image:require('../../Images/home.jpg'),
   link:'/rooms'
}
var rooms={
   header1:'ROOMS AVAILABLE NOW',
   header2:'LOW PRICES',
   btn:'RETURN HOME',
   image:require('../../Images/roommain.jpg'),
   link:'/'
}
export default function Routes()
{
   return(
        <Fragment>
        <Header/>
        <Switch>
        <Route exact path='/' render={(props)=><Home imageshow={home.image} header1={home.header1} header2={home.header2} btn={home.btn} link={home.link}/>}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/rooms' render={(props)=><Home imageshow={rooms.image} header1={rooms.header1} header2={rooms.header2} btn={rooms.btn} link={rooms.link}/>}/>
        <Route exact path='/rooms/:id' render={(props)=><RoomContext.Consumer>{context=>context.filter((obj)=>obj.id==props.match.params.id).map(obj=><Home imageshow={obj.imgurl} header1={"FOR YOU ROOMS NOW"} header2={"OFFERS"} btn={"BACK TO ROOMS"} link={'/rooms/'+props.match.params.id} datasource={obj}/>)}</RoomContext.Consumer>}/>}/>  
        </Switch>
       </Fragment>
   )
}
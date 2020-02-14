import './Home.css'
import React,{Fragment}from 'react';
import SimpleCard from '../Card/SimpleCard'
import Services from '../Services/Services'
import Roomlist from '../Roomlist/Roomlist';
import {withRouter} from 'react-router-dom'
const Img=require('react-image')
function Home(props) {
    const route=props.location.pathname;
    console.log(props);
    return (
        <Fragment>
        {props.match.params.id==undefined?
        <Fragment>
        <div className='mn'>
          <Img  className='ab' src={props.imageshow}/>
            <SimpleCard {...props}/> 
        </div>
        {route==='/'?<Services/>:null}
        {route==='/rooms'?<Roomlist/>:null}
        </Fragment>:<Fragment>
         <div>
         <Img className='xy' src={props.imageshow} />  
            <SimpleCard {...props}/> 
         </div>
         <Services datasource={props.datasource}/>               
        </Fragment>}
        </Fragment>
    )
}
export default withRouter(Home);

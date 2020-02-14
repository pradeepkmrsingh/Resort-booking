import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import './SimpleCard.css'
export default function SimpleCard(props)
{
  return(
    <Fragment>
      {props.match.params.id==undefined?   
    <div className='simplecard'>
    <div className='cd'>
    <div className='title'>{props.header1}</div>
    <span className='hotel'>{props.header2}</span>
    <Link to={props.link}><button className='btn'>{props.btn}</button></Link>
    </div>
    </div>:<div className='xsimplecard'>
    <div className='xcd'>
    <div className='xtitle'>{props.header1}</div>
    <span className='xhotel'>{props.header2}</span>
    <Link to={'/rooms'}><button className='xbtn'>{props.btn}</button></Link>
    </div>
    </div>
    }
    </Fragment>
  )
}
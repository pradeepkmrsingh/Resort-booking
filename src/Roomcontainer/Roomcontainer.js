import React, { Fragment} from 'react';
import Img from 'react-image';
import './Roomcontainer.css'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Roomcontainer(props) {
    return (
    <Fragment>
    {props.match.params.id===undefined?
    <Link to={`/rooms/${props.datasource.id}`}>
    <div className="card">
    <img src={props.datasource.imgurl} className='roomimg' />
    <div className="container">
    <h4>Hotel Name: {props.datasource.name}</h4>
    <h4>Price: Rs.{props.datasource.price}</h4>
    </div>
    </div>
    </Link>:<div className="card">
    <img src={props.url} className='roomimg'/>
    </div>}
    </Fragment>
    )
}

export default withRouter(Roomcontainer);

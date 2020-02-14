import React,{Fragment} from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer,FaLine} from 'react-icons/fa';
import {withRouter} from 'react-router-dom';
import './Services.css'
import Roomcontainer from '../../Roomcontainer/Roomcontainer';
function Services(props)
{
   console.log(props);
    return(
       <Fragment>
          {props.location.pathname==='/'?
         <div className='servicemain' >
        <div className='service'>
           <div>SERVICES</div>
           <div><FaLine/></div>
        </div>
        <div className='main'>
         <div className='mn'>
          <div className='icons'> <FaCocktail/></div>
          <div>FREE COCKTAILS</div>
         </div>
         <div className='mn'>
         <div className='icons'> <FaHiking/> </div>
         <div>ENDLESS HIKING</div>
         </div>
         <div className='mn'>
         <div className='icons'> <FaShuttleVan/> </div>
         <div>FREE SHUTTLE</div>
         </div>
         <div className='mn'>
         <div className='icons'> <FaBeer/> </div>
         <div>STRONGEST BEER</div>
        </div>
        </div>
        </div>
          :<Fragment>
            <div className='servicetitle'>COMPLETE VIEW OF ROOM</div>
          <div className='serviceroom'>
           {props.datasource.roomsurl.map((obj)=><Roomcontainer url={obj}/>)} 
         </div>
         <div className='rmcontainer'>
        <div className='containerx'>
        Details
        <div className='containerxy'>{props.datasource.description.details}</div>
        </div>
        <div className='containerx'>
         Infos
         <div className='containerxy'>
    {props.datasource.description.info.map(obj=><li>{obj}</li>)}
         </div>
        </div>
        </div>
         </Fragment>} 
        </Fragment>
    )
}
export default withRouter(Services);
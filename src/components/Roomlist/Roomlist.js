import React, {useState,Fragment} from 'react';
import {RoomContext} from '../../App'
import Roomcontainer from '../../Roomcontainer/Roomcontainer';
import './Roomlist.css'
export default function Roomlist() {
    function handle(event){
      if(event.target.name==='location')
      setroom({...room,location:event.target.value})
      else if(event.target.name==='roomtype')
      setroom({...room,roomtype:event.target.value})
      else if(event.target.name==='guests')
      setroom({...room,guests:Number(event.target.value)});
      else if(event.target.name==='breakfast')
      setroom({...room,breakfast:event.target.checked})
      else if(event.target.name==='pets')
      setroom({...room,pets:event.target.checked});
      //console.log(event.target.checked);
       console.log(room);
    }
    const [room,setroom]= useState({location:'Delhi',roomtype:'single',guests:1,breakfast:false,pets:false});
    return (
        <Fragment>
        <div className='featuredroom'>FEATURED ROOMS</div>
        <div className='inputdiv'>
            <div><input onChange={handle} name='location' className='input' placeholder='Delhi'/>SEARCH</div>
            
            <div><select onChange={handle} name='roomtype' className='slct'><option>single</option>
            <option>double</option></select>
            ROOM TYPE
            </div>

            <div><select onChange={handle} name='guests' className='slct'><option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            </select>
            GUESTS
            </div>

            <div className='chkbox'>
            <div><input onChange={handle} name='breakfast' className='chk' type='checkbox' value='breakfast'/>breakfast</div>
            <div><input onChange={handle} name='pets' className='chk' type='checkbox' value='pets'/>pets</div>
            </div>

        </div>
        <div className='roomlist'>
        <RoomContext.Consumer>
        {context=>context.filter((obj)=>{return room.location===obj.location
         && room.guests===obj.guests && room.roomtype===obj.roomtype
         && room.breakfast===obj.breakfast && room.pets===obj.pets?true:false
         }).map((obj,index)=><Roomcontainer key={index} datasource={obj}/>)}
        </RoomContext.Consumer>
        {<div></div>}
        </div>
        </Fragment>
    )
}

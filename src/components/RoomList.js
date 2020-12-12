import React from 'react'
import Room from './Room'

export default function RoomList({rooms}) {
if(rooms.length === 0){
    return (
        <div className="emptySearch">
            <center><h3>Таны хайсан хайлт илэрцгүй</h3></center>
        </div>
    )


}
return (
<section className="roomslist">
<div className="roomslist-center">

    {rooms.map(item=>{
        return <Room key={item.id} room={item}/>;
    })}

</div>
</section>
); 
}

import React from 'react'
import Item from './Item'

const DisplayNote = (props) => {
  return (
    <div className='row m-5'>
      {
        props.data.length>0?
        props.data.map((val)=>{
            return (
            <Item key={val.sno} sno={val.sno} title={val.title} desc={val.desc} deleteNote={props.deleteNote} showNote={props.showNote} editNote={props.editNote}/>
            )
        }):
        <div className="alert alert-warning" role="alert">No notes available!! Click on "Take a note" button to add new notes</div>
      }
    </div>
  )
}

export default DisplayNote

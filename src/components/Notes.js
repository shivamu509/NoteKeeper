import React, { useEffect, useState } from 'react'
import AddNote from './NoteModal/AddNote'
import DisplayNote from './DisplayNote'
import ShowItemModal from './NoteModal/ShowItemModal'
import EditNote from './NoteModal/EditNote'

const Notes = () => {
  
  let initData=[];
  if(localStorage.getItem('notes')===null) initData=[];
  else initData = JSON.parse(localStorage.getItem('notes'));

  const [data,setData] = useState(initData);
  
  const [item,setItem] = useState({
    sno:0,
    title: '',
    desc: ''
  })  
  
  const add=({title,desc})=>{
      let sno;
      if(data.length===0) sno = 1;
      else sno = data[data.length - 1].sno+1;
      let newData = {sno:sno,title:title,desc:desc};
      setData([...data,newData])
  }
  
  const showNote = (title,desc)=>{
    setItem({title:title,desc:desc})

  }
  
  const editNote=(sno)=>{
    let temp = data.filter((val)=>val.sno===sno);
    setItem(temp[0]);
  }

  const edit = (val)=>{
    let temp = []
    data.forEach(ele => {
      if(val.sno===ele.sno){
        temp.push({sno:val.sno,title:val.title,desc:val.desc})
      }else{
        temp.push(ele)
      }
    });
    // console.log(temp)
    setData(temp)
  }
  
  const deleteNote = (sno)=>{
    console.log(sno);
    let newData = data.filter((val)=>val.sno!==sno)
    setData(newData)
  }
  
  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(data));
  },[data])
  
  return (
    <div className='mt-5'>
      <AddNote add={add}/>
      <DisplayNote data={data} editNote={editNote} deleteNote={deleteNote} showNote={showNote}/>
      <ShowItemModal title={item.title} desc={item.desc} />
      <EditNote edit={edit} {...item} />
    </div>
  )
}

export default Notes

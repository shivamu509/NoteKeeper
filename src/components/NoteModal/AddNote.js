import React, { useRef, useState } from 'react'

const AddNote = (props) => {
    const inp1 = useRef("")
    const inp2 = useRef("")
    const [newData,setNewData] = useState({})
    const handler = (e)=>{
        setNewData({...newData,[e.target.name]:e.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        inp1.current.value = "";
        inp2.current.value = "";
        props.add(newData)
    }
    return (
        <>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#addNote">Take a note.... <i className="fa-solid fa-pen"></i></button>
            </div>
            <div className="modal fade m-auto" id="addNote" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content note">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Note</h1>
                            <button type="button" className="btn-close text-bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id='addModal' onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-md-12 form-group m-2">
                                        <label htmlFor="title" className="form-label d-flex justify-content-start">Title</label>
                                        <input type="text" ref={inp1} className="form-control note-grey" name="title" id="title" onChange={handler} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group m-2">
                                        <label htmlFor="desc" className="form-label d-flex justify-content-start">Write your note</label>
                                        <textarea className="form-control note-grey" ref={inp2} name="desc" id="desc" cols="30" rows="7" onChange={handler}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button form='addModal' type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNote

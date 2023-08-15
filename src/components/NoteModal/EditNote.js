import React, { useState,useEffect } from 'react'

const EditNote = (props) => {
    console.log(props);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    useEffect(()=>{
        setTitle(props.title)
        setDesc(props.desc);
    },[props])
    
    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }
    const descHandler = (e)=>{
        setDesc(e.target.value)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        let temp = {sno:props.sno,title:title,desc:desc}
        props.edit(temp);
    }
    return (
        <>
            <div className="modal fade m-auto" id="editNote" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content note">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                            <button type="button" className="btn-close text-bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id='editModal' onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-md-12 form-group m-2">
                                        <label htmlFor="title" className="form-label d-flex justify-content-start">Title</label>
                                        <input type="text" className="form-control note-grey" name="title" id="title" value={title} onChange={titleHandler}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group m-2">
                                        <label htmlFor="desc" className="form-label d-flex justify-content-start">Write your note</label>
                                        <textarea className="form-control note-grey" name="desc" id="desc" cols="30" rows="7" value={desc} onChange={descHandler}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button form='editModal' type="submit" className="btn btn-primary" data-bs-dismiss="modal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditNote

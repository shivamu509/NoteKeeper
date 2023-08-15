import React from 'react'

const Item = (props) => {
    return (
        <div className="col-lg-3 col-md-6 my-3 mb-sm-0">
            <div className="card bg-warning-subtle">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc.length > 100 ? props.desc.slice(0, 100) + '...' : props.desc}</p>
                    <button className="m-2 btn btn-warning" onClick={() => { props.editNote(props.sno) }} data-bs-toggle="modal" data-bs-target="#editNote">Edit</button>
                    <button className="m-2 btn btn-success" onClick={() => { props.showNote(props.title,props.desc) }} data-bs-toggle="modal" data-bs-target="#viewNote">View</button>
                    <button className="m-2 btn btn-danger" onClick={() => { props.deleteNote(props.sno) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Item

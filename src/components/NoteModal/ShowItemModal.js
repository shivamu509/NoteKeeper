import React from 'react'

const ShowItemModal = (props) => {
    return (
        <div className="modal fade" id="viewNote" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content note">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <textarea className="form-control note-grey" id="exampleFormControlTextarea1" rows="10" value={props.desc} readOnly={true}></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Understood</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowItemModal

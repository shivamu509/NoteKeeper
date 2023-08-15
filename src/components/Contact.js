import React from 'react'

const Contact = () => {
    return (
        <div className="content mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h3 className="heading mb-4">Let's talk about everything!</h3>
                                <p>We value your experience, and our dedicated support team is ready to assist you. Provide the necessary details, and our team will respond instantly.</p>
                                <p><img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="contact_photo" className="img-fluid w-50"/></p>
                            </div>
                            <div className="col-md-6">
                                <form className="mb-5" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-12 form-group m-2">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group m-2">
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group m-2">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group m-2">
                                            <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="submit" value="Send Message" className="btn btn-primary rounded-0 mt-2 py-2 px-4" onClick={()=>{alert("Form Submitted")}}/>
                                                <span className="submitting"></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

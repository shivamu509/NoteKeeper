import React from 'react'

const About = () => {
    return (
        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-3 border-bottom">NoteKeeper <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/105048/preview/Sephr_Notepad_with_Text_and_Pencil_1_preview_17c5.png" alt="icon" style={{'height':'5vh', width:"5vh"}}/></h2>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                    <i className="fa-solid fa-lightbulb fa-shake" style={{"color": "#cbce1c"}}></i>
                    </div>
                    <h3 className="fs-2 text-danger mb-4">Tap into Creativity</h3>
                    <ul>
                        <li><p>Unleash Your Brilliance with a Single Click! Start your journey with NoteKeeper's "Take a note" button for seamless note creation.</p></li>
                        <li><p>Enter a world of possibilities with our cutting-edge add note modal, making note-taking a breeze.</p></li>
                    </ul>
                </div>
                
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                    <i className="fa-solid fa-circle-plus fa-beat"></i>
                    </div>
                    <h3 className="fs-2 text-danger mb-4">Seamless Note Capturing</h3>
                    <ul>
                        <li><p className='fs-6'>Capture Brilliance on the Fly! Use the mesmerizing add note modal to pen down ideas and inspirations effortlessly.</p></li>
                        <li><p>Shape Your Notes with Precision! Personalize titles and notes, expressing your unique style and creativity.</p></li>
                    </ul>
                </div>
                
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                    <i className="fa-solid fa-trash-can fa-bounce"></i>
                    </div>
                    <h3 className="fs-2 text-danger mb-4">Think Twice, Delete Once</h3>
                    <ul>
                        <li><p>Clear your path to brilliance by bidding farewell to notes that have served their purpose, freeing up space for new inspiration.</p></li>
                        <li><p>Handle with Care! Exercise caution while deleting, preserving the essence of your notes and valuable insights.</p></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                    <i className="fa-solid fa-headset fa-beat"></i>
                    </div>
                    <h3 className="fs-2 text-danger mb-4">Help and Support</h3>
                    <ul>
                        <li><p>Elevate Your Experience with NoteKeeper! Access the Contact section for dedicated support and prompt assistance.</p></li>
                        <li><p>Seamless Assistance for Seamless Notekeeping! Our team ensures swift resolutions to keep you focused on productivity.</p></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default About

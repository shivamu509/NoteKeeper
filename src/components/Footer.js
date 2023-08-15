import React from 'react'

const Footer = () => {
  return (
    
<div className="container mt-auto">
  <footer className="py-5 sticky-bottom">
    <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
      <p>&copy; shivamu509, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex justify-content-center">
        <li className="ms-3"><a className="link-body-emphasis" href="https://www.linkedin.com/in/shivam-upadhyay-70297b198/"><i className="fa-brands fa-linkedin fa-xl"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="https://github.com/shivamu509/"><i className="fa-brands fa-github fa-xl"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="mailto:shivamu509@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a></li>
      </ul>
    </div>
  </footer>
</div>
  )
}

export default Footer

import React from 'react'
import Podbutton from '../Podbutton'

const Emailsection = () => {
  return (
    <>
      <div className="email_section">
        <div className="container_Email">
          <div className="row">
            <div className="col-md-6">
              <div className="container_email_left">
                <h6>Stay Updated With Us</h6>
                <p>Subscribe the blogs, to know about photography</p>
              </div>
            </div>
            <div className="col-md-6">
              <form action="">
                <div class="mb-3 mt-3">
                  <div className='Email_flex'>
                    <input type="email" class="form-control" placeholder="email" name="email" />
                    <Podbutton pdbtn="Notify Me" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emailsection

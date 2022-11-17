import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav>
        <div>
          <span>
            <Link to="/" relative="path">Space Frontiers</Link>
          </span>
          <section id='navbar'>
            <ul className='ml-auto'>
              {/* if user is logged in show my account and logout */}
              {Auth.loggedIn() ? (
                <>
                  <li as={Link} to='/user'>
                    My Account
                  </li>
                  <li onClick={Auth.logout}>Logout</li>
                </>
              ) : (
                // <li onClick={() => setShowModal(true)}>Login</li>
                <li onClick={() => setShowModal(true)}>Login</li>
              )}
            </ul>
          </section>
        </div>
      </nav>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <div defaultActiveKey='login'>
          <div closeButton>
            <section id='signup-modal'>
              <ul variant='pills'>
                  <li eventKey='login'>Login</li>
                  <li eventKey='signup'>Sign Up</li>
              </ul>
            </section>
          </div>
          <div>
            <section>
              <span eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </span>
              {/* <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane> */}
            </section>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AppNavbar;

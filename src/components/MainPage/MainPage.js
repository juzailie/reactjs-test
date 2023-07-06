import React, { useState, useContext } from 'react';
import './MainPage.css';
import Modal from '../Modal/Modal';
import AlertMessage from '../AlertMessage/AlertMessage';
import { AuthContext } from '../../context/auth-context';

const MainPage = ({ component: Component, ...rest }) => {

  const { authenticated } = useContext(AuthContext);

  const [isModalOpen, setModalOpen] = useState(true);

  const handleModal = () => {
    setModalOpen(false);
  }

  return (
    <div>
      {!authenticated && (
        <div>
          <Modal show={isModalOpen} modalClosed={handleModal}>
            <AlertMessage />
          </Modal>
          <iframe title="google" src="https://www.google.com/webhp?igu=1" frameborder="0" className="google-iframe"></iframe>
        </div>
      )}
    </div>
  );

}

export default MainPage;
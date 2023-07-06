import React, { useState } from 'react';
import './Dashboard.css';
import Modal from '../Modal/Modal';
import AlertMessage from '../AlertMessage/AlertMessage';

const Dashboard = (props) => {

    const [isModalOpen, setModalOpen] = useState(true);

    const handleModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <Modal show={isModalOpen} modalClosed={handleModal}>
                <AlertMessage />
            </Modal>
            <iframe title="google" src="https://www.google.com/webhp?igu=1" frameborder="0" className="google-iframe"></iframe>
        </div>
    );

}

export default Dashboard;
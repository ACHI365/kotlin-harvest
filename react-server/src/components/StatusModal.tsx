import React from "react";
import { Modal, Alert } from "react-bootstrap";
import { ModalState } from "../types/domain";

interface StatusModalProps {
    modalState: ModalState;
    onClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ modalState, onClose }) => (
    <Modal show={modalState.isOpen} onHide={onClose} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
            <Alert variant={modalState.variant} className="mb-0 fs-3 fw-bold text-center">
                {modalState.modalMsg}
            </Alert>
        </Modal.Body>
    </Modal>
);

export default StatusModal;

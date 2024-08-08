import Modal from 'react-bootstrap/Modal';
import './Build.css';

export interface Options {
  id: string;
  displayName: string;
  imageUrl: string;
}

interface BuildOptionsModalProps {
  modalTitle: string;
  options: Options[];
  onOptionSelected: (id: string) => void;
  shouldShow: boolean;
  onHideClicked: () => void;
}

function BuildOptionsModal({
  modalTitle,
  options,
  onOptionSelected,
  shouldShow,
  onHideClicked,
}: BuildOptionsModalProps) {
  
  const buttonOptions = options.map((opt) => {
    return (
      <button
        key={`loadout-option-${opt.id}`}
        className="card card-contents"
        onClick={() => onOptionSelected(opt.id)}
      >
        <img className="card-image" src={opt.imageUrl} alt={opt.displayName}></img>
      </button>
    );
  });

  return (
    <>
      <Modal show={shouldShow} size="lg" fullscreen="md-down" onHide={onHideClicked}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">{buttonOptions}</Modal.Body>
      </Modal>
    </>
  );
}

export default BuildOptionsModal;

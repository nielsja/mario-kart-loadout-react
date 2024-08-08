import { useState } from 'react';
import './Build.css';
import BuildOptionsModal, { Options } from './BuildOptionsModal';

interface BuildOptionProps {
  id: string;
  allOptions: Options[];
  onSelectOption: (id: string) => void;
}

function BuildOption({ id, allOptions, onSelectOption }: BuildOptionProps) {
  const [selectedImage, setSelectedImage] = useState(getImageUrl(id));
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  function getImageUrl(id: string) {
    return allOptions.find((opt) => opt.id === id)?.imageUrl ?? ''
  }

  const handleOptionSelected = (id: string) => {
    setShowModal(false);
    setSelectedImage(getImageUrl(id));
    onSelectOption(id);
  };

  return (
    <>
      <button className="card card-contents" onClick={openModal}>
          <img src={selectedImage} className="card-image"></img>
      </button>
      <BuildOptionsModal
        modalTitle="Drivers"
        options={allOptions}
        onOptionSelected={handleOptionSelected}
        shouldShow={showModal}
        onHideClicked={hideModal}
      ></BuildOptionsModal>
    </>
  );
}

export default BuildOption;

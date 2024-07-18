import { useState } from 'react';
import './LoadoutOption.css';

export interface LoadoutOptionProps {
  options: LoadoutOption[];
  onSelectOption: (id: string) => void;
}

interface LoadoutOption {
  optionId: string;
  displayName: string;
  imageUrl: string;
}

function LoadoutOption({ options, onSelectOption }: LoadoutOptionProps) {
  const [buttonText, setButtonText] = useState('Select');
  const onSelectionClicked = (newId: string, newText: string) => {
    onSelectOption(newId);
    setButtonText(newText);
  };
  const buttonOptions = options.map((opt) => {
    return (
      <button
        key={`loadout-option-${opt.optionId}`}
        className="btn option-select-button"
        type="button"
        onClick={() => onSelectionClicked(opt.optionId, opt.displayName)}
      >
        <img
          src={opt.imageUrl}
          className="option-select-img"
          alt={opt.displayName}
        ></img>
      </button>
    );
  });

  return (
    <>
      <div className="option-select-button-container">
        {/* <div className="option-select-button-container"> */}
        {buttonOptions}
        {/* </div> */}
        {/* <div className="dropdown extended w-100"> */}
        {/* <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {buttonText}
          </button> */}
        {/* <ul className="dropdown-menu dropdown-menu-lg-start dropdown-menu-sm-center">
            {options.map((opt) => {
              return (
                <li
                  className="dropdown-item-li"
                  key={`loadout-option-${opt.optionId}`}
                  onClick={() =>
                    onSelectionClicked(opt.optionId, opt.displayName)
                  }
                >
                  <a className="dropdown-item" href="#">
                    <img src={opt.imageUrl}></img>
                  </a>
                </li>
              );
            })}
          </ul> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default LoadoutOption;

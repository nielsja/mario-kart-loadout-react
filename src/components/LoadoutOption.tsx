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
  return (
    <>
      <div className="dropdown w-100">
        <button
          className="btn btn-secondary dropdown-toggle w-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-start dropdown-menu-sm-center">
          {options.map((opt) => {
            return (
              <li
                className="dropdown-item-li"
                key={`loadout-option-${opt.optionId}`}
                onClick={() => onSelectOption(opt.optionId)}
              >
                <a className="dropdown-item" href="#">
                  <img className="dropdown-item-image" src={opt.imageUrl}></img>
                  {/* <span>{opt.optionId}</span> */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LoadoutOption;

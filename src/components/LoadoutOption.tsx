export interface LoadoutOptionProps {
  options: LoadoutOption[];
  onSelectOption: (optionName: string) => void;
}
interface LoadoutOption {
  optionName: string;
  displayName: string;
  imageUrl: string;
}
function LoadoutOption({ options, onSelectOption }: LoadoutOptionProps) {
  return (
    <>
      <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle w-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          {options.map((opt) => {
            return (
              <li
                key={`loadout-option-${opt.optionName}`}
                onClick={() => onSelectOption(opt.optionName)}
              >
                <a className="dropdown-item" href="#">
                  <img src={opt.imageUrl}></img>
                  <span>{opt.displayName}</span>
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

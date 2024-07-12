import './SelectedOption.css';

interface SelectedOptionProps {
  // TODO: remove this optional and have whatever is calling it pass empty string
  cardTitle?: string;
  imageUrl?: string;
}

function SelectedOption({ cardTitle, imageUrl }: SelectedOptionProps) {
  return (
    <>
      <div className="m-3">
        <div className="card card-contents w-100">
          <div className="card-body">
            <img src={imageUrl} className="card-image" alt={cardTitle}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedOption;

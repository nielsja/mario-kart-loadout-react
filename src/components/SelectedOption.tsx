import './SelectedOption.css';

interface SelectedOptionProps {
  cardTitle?: string;
  imageUrl?: string;
}

function SelectedOption({ cardTitle, imageUrl }: SelectedOptionProps) {
  return (
    <>
      <div className="m-3">
        <div className="card card-contents w-100">
          <img src={imageUrl} className="card-image"></img>
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedOption;

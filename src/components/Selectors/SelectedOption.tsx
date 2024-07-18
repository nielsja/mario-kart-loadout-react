import './SelectedOption.css';

interface SelectedOptionProps {
  cardTitle: string;
  imageUrl: string;
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

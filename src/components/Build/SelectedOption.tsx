import './SelectedOption.css';

interface SelectedOptionProps {
  cardTitle: string;
  imageUrl: string;
}

function SelectedOption({ cardTitle, imageUrl }: SelectedOptionProps) {
  return (
    <>
        <div className="card card-contents">
          <div className="card-body">
            <img src={imageUrl} className="card-image" alt={cardTitle}></img>
          </div>
        </div>
    </>
  );
}

export default SelectedOption;

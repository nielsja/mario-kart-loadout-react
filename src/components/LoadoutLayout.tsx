import LoadoutOption from './LoadoutOption';
import SelectedOption from './SelectedOption';

export interface LoadoutLayoutProps {
  selectedOptionTitle: string;
  selectedOptionImage: string;
  loadoutOptions: LoadoutOption[];
  optionSelectedHandler: (id: string) => void;
}

function LoadoutLayout({
  selectedOptionTitle,
  selectedOptionImage,
  loadoutOptions,
  optionSelectedHandler,
}: LoadoutLayoutProps) {
  return (
    <>
      <div className="col">
        <SelectedOption
          cardTitle={selectedOptionTitle}
          imageUrl={selectedOptionImage}
        ></SelectedOption>
        <LoadoutOption
          options={loadoutOptions}
          onSelectOption={optionSelectedHandler}
        ></LoadoutOption>
      </div>
    </>
  );
}

export default LoadoutLayout;

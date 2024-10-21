interface TradeTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TradeTab: React.FC<TradeTabProps> = ({ label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`${
      isActive ? "border-dukiaBlue text-dukiaBlue" : "border-dukiaBlue/[10%]"
    } border-b-2 py-4 flex justify-center cursor-pointer`}
  >
    {label}
  </div>
);

export default TradeTab;

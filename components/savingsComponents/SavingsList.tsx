import { Plus } from "lucide-react";
import React from "react";

const SavingsList: React.FC<{ setCreateNew: (value: number) => void }> = ({
  setCreateNew,
}) => {
  const [savingsPlan, setSavingsPlan] = React.useState<Array<any> | null>(null);

  return (
    <section className="p-5 rounded-xl border border-[#E8E9ED] space-y-8 w-[40%]">
      <div className="flex items-center justify-between">
        {/* Title and Sort */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">Savings plan</p>

          {/* Sort */}
          <button className="flex items-center gap-1 px-3 py-2 text-sm rounded border border-dukiaBlue/[10%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 7l3-3 3 3m0 10l-3 3-3-3"
              />
            </svg>
            <span>Sort by</span>
          </button>
        </div>

        {/* Create New  */}
        <button
          onClick={() => setCreateNew(1)}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-dukiaBlue text-white">
            <Plus size={16} />
          </div>
          <span className="text-xs text-[#676D88] font-semibold">
            Create new
          </span>
        </button>
      </div>

      {savingsPlan ? (
        <div>
          {savingsPlan.map((savings) => (
            <div key={savings.id}>
              <p>{savings.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-bold text-lg text-center">No Savings Plan Found</p>
      )}
    </section>
  );
};

export default SavingsList;

"use client";

import React from "react";
import { Search } from "lucide-react";

const TransactionHistory = () => {
  const [history, setHistory] = React.useState<Array<any> | null>(null);
  const [search, setSearch] = React.useState<string | "">("");

  return (
    <section className="space-y-2.5 text-dukiaBlue">
      {/* Title, Search&Sort */}
      <div className="space-y-1.5">
        <p className="font-semibold">Transaction History</p>

        {/* Search and Sort */}
        <div className="flex items-center border-[1.5px] border-dukiaBlue/[10%] rounded-lg bg-white">
          {/* <!-- Search Icon and Input --> */}
          <div className="flex items-center px-2">
            {/* <!-- Search Icon --> */}
            <Search size={24} />
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search source, date or amount"
            className="flex-grow py-4 px-2 outline-none font-semibold placeholder:text-[#676D88]"
          />

          {/* Sort */}
          <div className="border-l-[1.5px] border-dukiaBlue/[10%]">
            {/* <!-- Sort By Button --> */}
            <button className="flex items-center gap-1 py-4 px-2 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        </div>
      </div>

      {/* History */}
      {history ? (
        <div>
          {history.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-bold text-lg text-center">No Transaction Found</p>
      )}
    </section>
  );
};

export default TransactionHistory;

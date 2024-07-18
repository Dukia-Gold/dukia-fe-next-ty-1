"use client";

import StatementOfAccountModal from "@/components/transactionsComponents/StatementOfAccountModal";
import { transactionStore } from "@/store/transactions";
import { userStore } from "@/store/user";
import { Spin } from "antd";
import Link from "next/link";
import { useState } from "react";

const TransactionPage = () => {
  const [accountStatementModal, setAccountStatementModal] = useState(false);
  const closeModal = () => setAccountStatementModal(false);

  const transactions = transactionStore((state: any) => state.transactions);
  console.log(transactions);

  const user = userStore((state: any) => state.user);

  return (
    <main className="w-full bg-dukiaGrey text-dukiaBlue h-full mb-40 lg:mb-24">
      {user ? (
        <div>
          {transactions ? (
            <button
              onClick={() => setAccountStatementModal(true)}
              className="py-3.5 px-6 text-sm font-semibold bg-dukiaBlue text-white rounded-lg"
            >
              Download Statement of Account
            </button>
          ) : (
            <div className="flex flex-col pt-4 pb-14 px-1.5 md:px-5 lg:px-10">
              <div className="text-right text-xs space-x-2 font-semibold">
                <button className="py-3.5 px-4 border border-dukiaBlue/[25%] hover:border-dukiaGold rounded-lg">
                  Fund Wallet
                </button>
                <Link href="/buy-gold">
                  <button className="bg-dukiaBlue hover:bg-dukiaGold hover:text-dukiaBlue text-white rounded-lg py-3.5 px-6">
                    Buy Gold
                  </button>
                </Link>
              </div>

              <div className="h-[calc(100vh-18.9rem)] flex flex-col justify-center items-center">
                <svg
                  width="351"
                  height="280"
                  viewBox="0 0 351 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="350" height="280" fill="#F4F5F9" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M290.301 91C295.713 91 300.101 95.3876 300.101 100.8C300.101 106.212 295.713 110.6 290.301 110.6H234.301C239.713 110.6 244.101 114.988 244.101 120.4C244.101 125.812 239.713 130.2 234.301 130.2H265.101C270.513 130.2 274.901 134.588 274.901 140C274.901 145.412 270.513 149.8 265.101 149.8H250.857C244.033 149.8 238.501 154.188 238.501 159.6C238.501 163.208 241.301 166.475 246.901 169.4C252.313 169.4 256.701 173.788 256.701 179.2C256.701 184.612 252.313 189 246.901 189H130.701C125.288 189 120.901 184.612 120.901 179.2C120.901 173.788 125.288 169.4 130.701 169.4H76.1008C70.6884 169.4 66.3008 165.012 66.3008 159.6C66.3008 154.188 70.6884 149.8 76.1008 149.8H132.101C137.513 149.8 141.901 145.412 141.901 140C141.901 134.588 137.513 130.2 132.101 130.2H97.1008C91.6884 130.2 87.3008 125.812 87.3008 120.4C87.3008 114.988 91.6884 110.6 97.1008 110.6H153.101C147.688 110.6 143.301 106.212 143.301 100.8C143.301 95.3876 147.688 91 153.101 91H290.301ZM290.301 130.2C295.713 130.2 300.101 134.588 300.101 140C300.101 145.412 295.713 149.8 290.301 149.8C284.888 149.8 280.501 145.412 280.501 140C280.501 134.588 284.888 130.2 290.301 130.2Z"
                    fill="#111827"
                    fillOpacity="0.05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M215.641 89.6001L228.664 184.58L229.834 194.109C230.211 197.178 228.028 199.973 224.958 200.349L142.974 210.416C139.904 210.793 137.11 208.61 136.733 205.54L124.111 102.742C123.922 101.207 125.014 99.8096 126.549 99.6212C126.558 99.62 126.568 99.6188 126.578 99.6177L133.379 98.8548M138.879 98.2378L145.301 97.5175L138.879 98.2378Z"
                    fill="#F4F5F9"
                  />
                  <path
                    d="M216.879 89.4303C216.786 88.7463 216.155 88.2679 215.471 88.3617C214.787 88.4554 214.309 89.0859 214.403 89.7699L216.879 89.4303ZM228.664 184.58L229.904 184.428C229.904 184.422 229.903 184.416 229.902 184.41L228.664 184.58ZM229.834 194.109L231.074 193.956L229.834 194.109ZM224.958 200.349L225.11 201.59L224.958 200.349ZM142.974 210.416L143.126 211.657L142.974 210.416ZM136.733 205.54L137.974 205.388L136.733 205.54ZM126.578 99.6177L126.717 100.86L126.578 99.6177ZM133.519 100.097C134.205 100.02 134.699 99.4015 134.622 98.7154C134.545 98.0294 133.926 97.5356 133.24 97.6126L133.519 100.097ZM138.74 96.9956C138.054 97.0726 137.56 97.6911 137.637 98.3772C137.714 99.0632 138.333 99.557 139.019 99.48L138.74 96.9956ZM145.441 98.7597C146.127 98.6827 146.62 98.0642 146.543 97.3781C146.467 96.6921 145.848 96.1983 145.162 96.2753L145.441 98.7597ZM214.403 89.7699L227.425 184.75L229.902 184.41L216.879 89.4303L214.403 89.7699ZM227.423 184.732L228.593 194.261L231.074 193.956L229.904 184.428L227.423 184.732ZM228.593 194.261C228.886 196.646 227.19 198.816 224.806 199.109L225.11 201.59C228.865 201.129 231.535 197.711 231.074 193.956L228.593 194.261ZM224.806 199.109L142.821 209.175L143.126 211.657L225.11 201.59L224.806 199.109ZM142.821 209.175C140.437 209.468 138.266 207.772 137.974 205.388L135.492 205.692C135.953 209.447 139.371 212.118 143.126 211.657L142.821 209.175ZM137.974 205.388L125.351 102.589L122.87 102.894L135.492 205.692L137.974 205.388ZM125.351 102.589C125.247 101.74 125.851 100.966 126.701 100.862L126.396 98.3805C124.176 98.6531 122.597 100.674 122.87 102.894L125.351 102.589ZM126.701 100.862C126.706 100.861 126.712 100.861 126.717 100.86L126.438 98.3755C126.424 98.3771 126.41 98.3788 126.396 98.3805L126.701 100.862ZM126.717 100.86L133.519 100.097L133.24 97.6126L126.438 98.3755L126.717 100.86ZM139.019 99.48L145.441 98.7597L145.162 96.2753L138.74 96.9956L139.019 99.48Z"
                    fill="#111827"
                    fillOpacity="0.65"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M212.096 95.5768L223.883 181.654L224.943 190.29C225.285 193.071 223.333 195.6 220.584 195.938L147.166 204.953C144.417 205.29 141.911 203.309 141.57 200.527L130.062 106.805C129.927 105.709 130.707 104.711 131.803 104.577L141.68 103.364"
                    fill="#111827"
                    fillOpacity="0.03"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M149.84 74C149.84 71.7909 151.631 70 153.84 70H219.882C220.942 70 221.959 70.4211 222.709 71.1707L242.467 90.9166C243.218 91.6668 243.64 92.6846 243.64 93.7459V183.6C243.64 185.809 241.849 187.6 239.64 187.6H153.84C151.631 187.6 149.84 185.809 149.84 183.6V74Z"
                    fill="#F4F5F9"
                  />
                  <path
                    d="M151.09 74C151.09 72.4812 152.321 71.25 153.84 71.25H219.882C220.611 71.25 221.31 71.5395 221.826 72.0549L241.584 91.8007C242.1 92.3165 242.39 93.0162 242.39 93.7459V183.6C242.39 185.119 241.159 186.35 239.64 186.35H153.84C152.321 186.35 151.09 185.119 151.09 183.6V74Z"
                    stroke="#111827"
                    strokeOpacity="0.65"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M219.84 73.3638V89.5998C219.84 91.9194 221.72 93.7998 224.04 93.7998H235.147"
                    stroke="#111827"
                    strokeOpacity="0.65"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M165.699 165.2H202.099M165.699 93.7998H202.099H165.699ZM165.699 110.6H225.899H165.699ZM165.699 128.8H225.899H165.699ZM165.699 147H225.899H165.699Z"
                    stroke="#111827"
                    strokeOpacity="0.2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text-center space-y-1 text-sm">
                  <p className="font-semibold">No Transactions</p>
                  <p className="text-dukiaBlue/[65%]">
                    You have no Transactions to view. Click “Buy Gold” to
                    perform your first transaction or fund your wallet.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-12rem)] text-center">
          <Spin size="large" />
        </div>
      )}

      <StatementOfAccountModal
        isOpen={accountStatementModal}
        closeModal={closeModal}
      />
    </main>
  );
};

export default TransactionPage;

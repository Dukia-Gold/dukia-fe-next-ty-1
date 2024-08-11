import Trade from "@/components/dashboardComponents/dashboardSections/Trade";
import Transactions from "@/components/dashboardComponents/dashboardSections/Transactions";
import useModalsStore from "@/store/modalsStore";
import { userStore } from "@/store/user";

type Props = {
  assetParams: {
    q: string;
  };
};

export default async function AssetsPage({ assetParams: { q } }: Props) {
  const user = userStore((state: any) => state.user);
  const updateModals = useModalsStore((state: any) => state.updateModals);

  return (
    <main className="w-full bg-dukiaGrey text-dukiaBlue h-full mb-40 lg:mb-24">
      {user ? (
        <div className="py-4 mb-40 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2"></div>
            <Trade />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2"></div>
            <Trade />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <Transactions />
            </div>
            
            <div></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};
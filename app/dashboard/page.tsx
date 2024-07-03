"use client";

import useFetchUserData from "@/lib/fetchUserData";
import { Spin } from "antd";

const DashboardPage = () => {
  const user = useFetchUserData();

  return (
    <main className="w-full h-screen">
      {user ? (
        <p>DashboardPage</p>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      )}
    </main>
  );
};

export default DashboardPage;

// export default withAuth(DashboardPage)

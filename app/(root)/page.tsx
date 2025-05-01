import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const isLoggedIn = {
    firstName: "Nishant",
  };

  return (
    <div className="pt-10  pl-10 text-center">
      <HeaderBox
        type="greeting"
        title="Welcome to Banking App"
        user={isLoggedIn.firstName || "Guest"}
        subtext="Access your account and manage your transactions"
      />

      <TotalBalanceBox
        accounts={[3, 42, 2]}
        totalBank={1}
        totalCurrentBalance={100000}
      />
    </div>
  );
}

export default Home;

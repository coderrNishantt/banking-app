'use client';
import React from 'react';
import CountUp from 'react-countup';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

interface TotalBalanceBoxProps {
  accounts?: any[];
  totalBank?: number;
  totalCurrentBalance?: number;
}

const TotalBalanceBox = ({
  accounts = [],
  totalBank = 0,
  totalCurrentBalance = 0,
}: TotalBalanceBoxProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Balance Box</h2>

      {/* Doughnut chart */}
      <DoughnutChart accounts={accounts} />

      {/* Account info */}
      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Account:</span> {JSON.stringify(accounts)}
      </p>

      <p className="text-sm text-gray-700 mb-2">
        <span className="font-semibold">Bank Accounts:</span> {totalBank}
      </p>

      {/* Fixed hydration-safe structure */}
      <div className="text-sm text-gray-700">
        <span className="font-semibold">Total Current Balance: </span>
        <AnimatedCounter amount={0} />
        <CountUp
          end={totalCurrentBalance}
          duration={2}
          separator=","
          decimals={2}
          prefix="₹"
          decimal="."
        />
      </div>
      


    </div>
  );
};

export default TotalBalanceBox;

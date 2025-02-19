"use client";

import { OrderDataTable } from "../data-table/page";

const DashboardPage = () => {
  const dashboardData = [
    { label: "Left to fulfill today", value: 0 },
    { label: "Fulfilled today", value: 0 },
    { label: "Unfulfilled", value: 0 },
  ];
  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dashboardData.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-xl border border-gray-200 bg-white p-6 text-center shadow-md dark:bg-black"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {item.value}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8"></div>
        <OrderDataTable />
      </div>
    </div>
  );
};

export default DashboardPage;

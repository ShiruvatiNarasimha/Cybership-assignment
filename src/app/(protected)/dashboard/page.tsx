"use client";

import { OrderDataTable } from "../data-table/page";

const DashboardPage = () => {
  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between gap-6">
          {[
            { label: "Left to fulfill today", value: 0 },
            { label: "Fulfilled today", value: 0 },
            { label: "Unfulfilled", value: 0 },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[400px] rounded-xl border border-gray-200 bg-white p-6 text-center shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-900">{item.value}</h2>
              <p className="text-gray-500">{item.label}</p>
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

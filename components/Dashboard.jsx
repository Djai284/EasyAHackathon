import { useState } from "react";
import AppWidget from "./AppWidget";
import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className="container mx-auto mt-12">

      <div className="flex w-full">
        <h1 className="text-orange-500 ml-5 text-3xl font-bold">
          Welcome to Solis!
        </h1>
        <div className="ml-auto content-end h-24 w-24">
          <Link href="/">
            <img
              src="logo.png"
              className=""
            />
          </Link>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 ml-10 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total users
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              12,000
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              $ 450k
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              20k
            </div>
          </div>
        </div> */}
      <div className="">
        <h1 className="text-orange-500 mb-5 text-xl">
          Recently Used
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:grid-cols-6">
          <AppWidget />
          <AppWidget />
          <AppWidget />
        </div>
      </div>
    </main>
  );
}
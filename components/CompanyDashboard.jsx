import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Picture", "Meta Tags"];

const TABLE_ROWS = [
  { name: "Art 1", picture: "pic1.png", tags: ["anime", "nature", "bamboo"] },
  {
    name: "Art 2",
    picture: "pic2.png",
    tags: ["anime", "flowers", "mountain"],
  },
  { name: "Art 3", picture: "pic3.png", tags: ["anime", "river", "bonsai"] },
  { name: "Art 4", picture: "pic4.png", tags: ["anime", "temple", "bonsai"] },
  {
    name: "Art 5",
    picture: "pic5.png",
    tags: ["anime", "flowers", "mountain"],
  },
  { name: "Art 6", picture: "pic6.png", tags: ["anime", "girl", "bonsai"] },
  {
    name: "Art 7",
    picture: "pic7.png",
    tags: ["anime", "flowers", "martial arts", ""],
  },
  { name: "Art 8", picture: "pic8.png", tags: ["anime", "bridge", "fish"] },
  { name: "Art 9", picture: "pic9.png", tags: ["anime", "trees"] },
  { name: "Art 10", picture: "pic10.png", tags: ["anime", "water"] },
];

export default function Dashboard() {
  return (
    <main className="container w-full mx-auto bg-red-700">
      <div className="">
        <Card className="overflow-scroll h-full w-full p-10">
          <div className="flex">
            <div className="flex items-center">
              <div className="flex border border-red-200 rounded">
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-white bg-red-600 border-l rounded ">
                  Search
                </button>
              </div>
            </div>
            <svg
              className="h-10 absolute top-0 right-0 m-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96a2 2 0 0 0-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"
                fill="#DC2626"
                class="fill-000000"
              ></path>
              <path d="M0 0h48v48H0z" fill="none"></path>
            </svg>
          </div>

          <div className="w-80 p-5 shadow-xl bg-red-100 rounded-xl mt-10 hover:cursor-pointer">
            <h1 className="text-xl font-bold"> Anime Collection </h1>
            <h2 className="text-md mb-2"> 10 Gb | $4,000 </h2>
            <img src="pic2.png" className="rounded-lg" />
          </div>
        </Card>
      </div>
    </main>
  );
}

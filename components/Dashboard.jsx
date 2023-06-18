import React, { useState } from "react";
import AppWidget from "./AppWidget";
import Link from "next/link";
import { Card, Typography } from "@material-tailwind/react";
import Popup from "./Popup";
import { fileURLToPath } from "url";

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

  /**
   * Submits the data to the blockchain logic that needs to be implemented
   * @param {Image} file
   * @param {String} fileName
   * @param {Array} metaTags
   */
  function submitArt(file, metaTags) {
    // checks if there is a file uploaded. If not, then an error message will pop up.
    if (file == '') {
      setMsg("Please select a file before submitting!")
    } else {
      setMsg('Successfully uploaded!')
      TABLE_ROWS.push({name: file.name, picture: file.name, tags: metaTags})
      console.log('file:', file)
      console.log('tags: ', metaTags)
      setTags([''])
      // mint NFT with the file
      // IBFS for metaTags
    }
  }
  const [msg, setMsg] = useState('')

  const [file, setFile] = useState('');
  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded)
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const [tag, setTag] = useState("");
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const [tags, setTags] = useState(new Set());
  const submitTag = (e) => {
    if (e.key === "Enter") {
      console.log(tag);
      setTags(tags.add(tag));
    }
  };

  return (
    <main className="container w-full mx-auto bg-red-700">
      <h1 className="text-2xl text-white mb-5"> At A Glance </h1>
      <div className="p-10 shadow-lg bg-white rounded-xl">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4  py-5 bg-white rounded-lg">
            <div className="text-xl font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              $ 200
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-xl mb-5 font-medium text-gray-500 truncate">
              Daily Performance ($)
            </div>
            <img src="graph.png" />
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-xl font-medium text-gray-500 truncate">
              Most Popular Image
            </div>
            <img src="pic2.png" className="px-10 pt-5 " />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl text-white my-5"> Your Artwork </h1>
        <Card className="overflow-scroll h-full w-full p-10">
          <div className="hover:brighten-120 hover:cursor-pointer">
            <svg
              className="absolute top-0 right-0 m-10"
              onClick={() => setButtonPopup(true)}
              height="24"
              version="1.1"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0 -1028.4)">
                <path
                  d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                  fill="#27ae60"
                  transform="translate(0 1029.4)"
                />
                <path
                  d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                  fill="#2ecc71"
                  transform="translate(0 1028.4)"
                />
                <path
                  d="m6.0001 1042.4h4.9999v5h2v-5h5v-2h-5v-5h-2v5h-4.9999v2z"
                  fill="#27ae60"
                />
                <path
                  d="m6 1041.4h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z"
                  fill="#ecf0f1"
                />
              </g>
            </svg>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h1 className="text-xl mb-5"> Upload your art! </h1>
              <input
                type="file"
                // ref={hiddenFileInput}
                onChange={handleFileChange}
              />
              <label className="break-before">
                Tags:
                <input
                  type="text"
                  value={tag}
                  onKeyDown={submitTag}
                  onChange={handleTagChange}
                  className="bg-red-100 rounded-lg ml-2"
                  
                  // ref={}
                />
                <div>
                  {Array.from(tags).map((tag) => (
                    <p className="text-blue-500 inline-block ml-4"> {tag} </p>
                  ))}
                </div>
              </label>

              <button
                className="bg-green-200 px-4 py-2 rounded-lg mt-10"
                onClick={() => {submitArt(file, tags)}}
              >
                Submit!
              </button>
              <label className="text-red-700 flex justify-center"> {msg} </label>
            </Popup>
          </div>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, picture, tags }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr
                    key={name}
                    className="hover:bg-gray-200 hover:cursor-pointer"
                  >
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography> */}
                      <img
                        src={picture}
                        className="h-20 hover:shadow-lg hover:cursor-pointer"
                      />
                    </td>
                    <td className={classes}>
                      {Array.from(tags).map((tag) => (
                        <p>{tag},</p>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </main>
  );
}

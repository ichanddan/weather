import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Weather() {
  const [city, setCity] = useState();
  const [callcity, setCallCity] = useState("Varanasi");
  const [data, setData] = useState([]);
  const apiKey = "73436dd972ac94c789a733ee2a3066c4";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${callcity}&units=Metric&appid=${apiKey}`;
  useEffect(() => {
    async function getData() {
      const req = await fetch(api);
      const res = await req.json();
      setData(res);
    }
    getData();
  }, [callcity]);

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 mt-20">
          <div className="flex items-center justify-center w-full ">
            <input
              type="text"
              placeholder="Enter Your City"
              className="w-full outline-none p-3"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <button
              className="m-2"
              onClick={() => {
                setCallCity(city);
              }}
            >
              <FaSearch className="text-xl" />
            </button>
          </div>
          <div className="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover">
            <p className="px-2 py-1 text-sm tracking-widest dark:text-gray-800 uppercase dark:bg-gray-100 bg-opacity-75 rounded shadow-lg">
              {data.name}
            </p>
          </div>
          <div className="flex justify-between p-4">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <span className="text-5xl font-semibold">{data?.main?.temp}°</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-12 h-12 dark:text-yellow-600 fill-current shrink-0"
                >
                  <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                  <rect width="32" height="48" x="240" y="16"></rect>
                  <rect width="32" height="48" x="240" y="448"></rect>
                  <rect width="48" height="32" x="448" y="240"></rect>
                  <rect width="48" height="32" x="16" y="240"></rect>
                  <rect
                    width="32"
                    height="45.255"
                    x="400"
                    y="393.373"
                    transform="rotate(-45 416 416)"
                  ></rect>
                  <rect
                    width="32.001"
                    height="45.255"
                    x="80"
                    y="73.373"
                    transform="rotate(-45 96 96)"
                  ></rect>
                  <rect
                    width="45.255"
                    height="32"
                    x="73.373"
                    y="400"
                    transform="rotate(-45.001 96.002 416.003)"
                  ></rect>
                  <rect
                    width="45.255"
                    height="32.001"
                    x="393.373"
                    y="80"
                    transform="rotate(-45 416 96)"
                  ></rect>
                </svg>
              </div>
              <p className="text-sm">
                description
                <br />
                6-10 KPH winds.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-600 dark:border-gray-300">
            <div className="flex items-center space-x-1">
              <span className="font-bold">8</span>
              <span className="text-sm">UV</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">5%</span>
              <span className="text-sm">Precip</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">14°</span>
              <span className="text-sm">Dew Point</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

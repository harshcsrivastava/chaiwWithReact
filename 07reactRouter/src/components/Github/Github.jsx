import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/harshcsrivastava")
//       .then(resp => resp.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
const data = useLoaderData()
console.log(data);

  return (
    <div className="bg-gray-500 w-full text-white text-center text-lg h-20">
      Github Followers: {data.message}
    </div>
  );
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
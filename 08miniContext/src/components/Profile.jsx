import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  // conditional return
  if (!user) return <div>Please Login Bruh</div>;

  return <div>Welcome {user.username} </div>;
}

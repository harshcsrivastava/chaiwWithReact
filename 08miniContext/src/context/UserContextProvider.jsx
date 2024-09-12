import React from "react";
import UserContext from "./UserContext";

// iske andar ke component ko sari state ka access milega
// children is like Outlet
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <>
      {/* pass to kara liya, lekin kis value ko access de rhe, User and setUser de rhe */}
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;

import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import AuthContext from "./AuthContext";

const UserInfoContext = createContext();

const UserInfoContextProvider = (props) => {
  const { loggedIn } = useContext(AuthContext);
  const [allData, setAllData] = useState(null);

  async function getUserInfo() {
    try {
      await axios
        .post("http://localhost:3030/userinfo")
        .then((res) => setAllData(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loggedIn === true) {
      getUserInfo();
    }
  }, [loggedIn]);

  if (loggedIn) {
    return (
      <UserInfoContext.Provider value={allData}>
        {props.children}
      </UserInfoContext.Provider>
    );
  } else {
    return (
      <UserInfoContext.Provider value={allData}>
        {props.children}
      </UserInfoContext.Provider>
    );
  }
};

export default UserInfoContext;
export { UserInfoContextProvider };

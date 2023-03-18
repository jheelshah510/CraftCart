import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:3030/auth/loggedIn");

    setLoggedIn(loggedInRes.data);
    // getDataInfo(loggedInRes.data.user);
    // setTimeout(() => {
    //   if (loggedInRes) {
    //     getDataInfo(loggedInRes.data.user);
    //   }
    // }, 1500);
  }

  // async function getDataInfo(info) {
  //   const jt = { user: info };

  //   try {
  //     await axios
  //       .post("http://localhost:3030/userinfo", jt, {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setUsername(res.data.username);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };

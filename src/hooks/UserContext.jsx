import react from "react";

// import { getItem } from "../utils/localStorage";
// import persistUser from "./persistUser";

const context = react.createContext();

export function Provider(props) {
  const [contextData, setContext] = react.useState({
    url: process.env.REACT_APP_URL,
    imageURL:"https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png",
    name:"Anônimo"
  });

  return (
    <context.Provider value={{
      contextData,
      setContext
    }}>
      {props.children}
    </context.Provider>
  );
}
export const getContext = () => react.useContext(context);

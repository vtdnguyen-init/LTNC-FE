import { AnyRecord } from "dns";
import React, { useContext, useState } from "react";
interface Info {
  name: string;
  role: string;
}
interface UserContext {
  info: Info;
  setInfo: (e: Info) => void;
}

// Create the context with an initial value and the TypeScript interface
export const UserContext = React.createContext<UserContext>({
  info: { name: "", role: "" },
  setInfo: (e) => {
    return;
  },
});

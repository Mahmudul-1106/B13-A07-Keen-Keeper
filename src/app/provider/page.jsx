import React from "react";

import TimeLineContextProvider from "@/context/install.context";

const Providers = ({ children }) => {
  return <TimeLineContextProvider>{children}</TimeLineContextProvider>;
};

export default Providers;

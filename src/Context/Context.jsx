import React, { createContext } from "react";

export const Context = createContext();

export default  function ContextProvi({children}){
  return (
    <>
      <div>Context</div>
      {children}
    </>
  );
}



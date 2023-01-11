import React, { createContext, ReactNode, useContext, useState } from "react";
import { FetchData, ContextState } from "../assets/types";

type Props = {
  children?: ReactNode;
};

const contextDefaultValues: ContextState = {
  openModal: false,
  setOpenModal: () => {},
  selectedRow: null,
  setSelectedRow: () => {},
};

export const StateContext = createContext<ContextState>(contextDefaultValues);

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(
    contextDefaultValues.openModal
  );
  const [selectedRow, setSelectedRow] = useState<FetchData | null>(
    contextDefaultValues.selectedRow
  );

  return (
    <StateContext.Provider
      value={{
        openModal,
        setOpenModal,
        selectedRow,
        setSelectedRow,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

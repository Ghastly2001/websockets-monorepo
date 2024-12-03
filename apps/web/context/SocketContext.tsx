"use client";
import React, { createContext, useCallback } from "react";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (message: string) => any;
}

const SocketContext = createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback((message) => {
    console.log(`Message sent ${message}`);
  }, []);
  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

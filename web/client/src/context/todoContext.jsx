import React from 'react';
import { useState, useEffect, createContext } from 'react';
export const apiContext = createContext();
export default function apiState(props) {
  return (
    <apiContext.Provider value={data}>{props.children}</apiContext.Provider>
  );
}

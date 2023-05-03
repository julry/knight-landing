import React from "react";

const DEFAULT_STATE = {};

export const ScreenContext = React.createContext(DEFAULT_STATE);

export const ScreenProvider = ScreenContext.Provider;
export const ScreenConsumer = ScreenContext.Consumer;

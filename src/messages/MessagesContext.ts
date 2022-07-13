import { createContext } from 'react';

type MessagesContextType = {
  i18n: (key: string) => string;
};

export const MessagesContext = createContext<MessagesContextType>(
  {} as MessagesContextType,
);

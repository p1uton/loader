import { FC, useEffect, useState } from 'react';
import { MESSAGES_LOAD_TIME } from './consts';
import { MessagesContext } from './MessagesContext';
import { messagesResponse } from './messagesResponse';

type MessagesProviderProps = {
  children?: React.ReactNode;
};

export const MessagesProvider: FC<MessagesProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Record<string, string>>({});

  // Эмулируем получение переводов сообщений с сервера с задержкой
  useEffect(() => {
    setTimeout(() => {
      setMessages(messagesResponse);
    }, MESSAGES_LOAD_TIME * 1000);
  }, []);

  const i18n = (key: string) => {
    return messages.hasOwnProperty(key) ? messages[key] : key;
  };

  return (
    <MessagesContext.Provider value={{ i18n }}>
      {children}
    </MessagesContext.Provider>
  );
};

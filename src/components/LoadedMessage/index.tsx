import { useContext } from 'react';
import { MessagesContext } from '../../messages/MessagesContext';
import { SUCCESS_LOADING_FINISHED } from '../Loader/statuses';

export const LoadedMessage: React.FC = () => {
  const { i18n } = useContext(MessagesContext);
  return <div>{i18n(SUCCESS_LOADING_FINISHED)}</div>;
};

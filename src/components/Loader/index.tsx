import { useContext } from 'react';
import { MessagesContext } from '../../messages/MessagesContext';
import { Spinner } from '../Spinner';
import { LoadingStatuses } from './statuses';
import { useStatuses } from './useStatuses';

export const Loader: React.FC = () => {
  const status = useStatuses();

  const { i18n } = useContext(MessagesContext);

  return (
    <>
      <Spinner />
      <div>{i18n(LoadingStatuses[status])}</div>
    </>
  );
};

import { useEffect, useState } from 'react';
import { LOADER_MESSAGES_TIMEOUT, LoadingStatuses } from '../../consts/consts';
import { Spinner } from '../Spinner';
import { useTranslation } from 'react-i18next';

export const Loader: React.FC = () => {
  const [status, setStatus] = useState(0);

  const { t } = useTranslation('messages');

  useEffect(() => {
    if (status === LoadingStatuses.length - 1) {
      return;
    }

    const timeout = setTimeout(() => {
      setStatus((prev) => prev + 1);
    }, LOADER_MESSAGES_TIMEOUT * 1000);

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <>
      <Spinner />
      <div>{t(LoadingStatuses[status])}</div>
    </>
  );
};

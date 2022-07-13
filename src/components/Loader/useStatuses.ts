import { useEffect, useState } from 'react';
import { LOADER_MESSAGES_TIMEOUT } from './consts';
import { LoadingStatuses } from './statuses';

export const useStatuses = () => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (status === LoadingStatuses.length - 1) {
      return;
    }

    const timeout = setTimeout(() => {
      setStatus((prev) => prev + 1);
    }, LOADER_MESSAGES_TIMEOUT * 1000);

    return () => clearTimeout(timeout);
  }, [status]);

  return status;
};

import React, { Suspense, FC } from 'react';
import { LoadedMessage } from './components/LoadedMessage';
import { Loader } from './components/Loader';
import { WIDGET_LOAD_TIME } from './consts/consts';
import { delay } from './utils/utils';

const SomeConvenientWidget = React.lazy(() =>
  delay(WIDGET_LOAD_TIME * 1000).then(
    () => import('./components/SomeConvenientWidget'),
  ),
);

export const App: FC = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <LoadedMessage />
        <SomeConvenientWidget />
      </Suspense>
    </div>
  );
};

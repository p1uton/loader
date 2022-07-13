import React, { Suspense, FC } from 'react';
import { LoadedMessage } from './components/LoadedMessage';
import { Loader } from './components/Loader';
import { MessagesProvider } from './messages/MessagesProvider';
import { delay } from './utils/utils';

const WIDGET_LOAD_TIME = 10;

const SomeConvenientWidget = React.lazy(() =>
  delay(WIDGET_LOAD_TIME * 1000).then(
    () => import('./components/SomeConvenientWidget'),
  ),
);

export const App: FC = () => {
  return (
    <MessagesProvider>
      <Suspense fallback={<Loader />}>
        <LoadedMessage />
        <SomeConvenientWidget />
      </Suspense>
    </MessagesProvider>
  );
};

import { SUCCESS_LOADING_FINISHED } from '../../consts/consts';
import { useTranslation } from 'react-i18next';

export const LoadedMessage: React.FC = () => {
  const { t } = useTranslation('messages');
  return <div>{t(SUCCESS_LOADING_FINISHED)}</div>;
};

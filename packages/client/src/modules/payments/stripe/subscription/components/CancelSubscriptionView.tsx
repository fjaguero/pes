import React from 'react';

import { TranslateFunction } from '../../../../../i18n';
import { Button, Alert, CardGroup, CardTitle, CardText } from '../../../../common/components/web';

interface CancelSubscriptionViewProps {
  onClick: () => void;
  error: string | null;
  submitting: boolean;
  t: TranslateFunction;
}

export default ({ t, onClick, error, submitting }: CancelSubscriptionViewProps) => {
  return (
    <CardGroup>
      <CardTitle>{t('cancel.title')}</CardTitle>
      <CardText>
        <Button color="danger" onClick={onClick} disabled={submitting}>
          {t('cancel.btn')}
        </Button>
        {error && <Alert color="error">{error}</Alert>}
      </CardText>
    </CardGroup>
  );
};

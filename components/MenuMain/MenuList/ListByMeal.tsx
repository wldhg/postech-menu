import React from 'react';
import { Text } from '@fluentui/react';
import HiddenText from 'components/Controls/HiddenText';
import { MealType } from 'hooks/api';
import useI18n from 'hooks/i18n';
import MealByPlace from './MealByPlace';

import $ from './style.scss';
import D from './en.d.yml';

interface Props {
  type: MealType
};

const ListByMeal: React.FC<Props> = (props: Props) => {
  const { t } = useI18n(D);
  const { type } = props;

  return (
    <div className={$.menuBLD}>
      <div>
        <h3>
          <Text variant="mediumPlus" className={$.title}>
            <HiddenText>##&nbsp;</HiddenText>
            {t('학생 식당')}
          </Text>
        </h3>
        <MealByPlace place="jigok" type={type} />
      </div>
      <div>
        <h3>
          <Text variant="mediumPlus" className={$.title}>
            <HiddenText>##&nbsp;</HiddenText>
            {t('RIST 식당')}
          </Text>
        </h3>
        <MealByPlace place="rist" type={type} engTranslationRequired />
      </div>
    </div>
  );
};

export default ListByMeal;

import React from 'react';
import { Text } from 'office-ui-fabric-react';
import MealByPlace from './MealByPlace';
import useI18n from '../../I18n';
import { MealType } from '../../API';

import $ from './style.scss';
import D from './en.d.yml';

interface Props {
  type: MealType
};

const ListByMeal: React.SFC<Props> = (props: Props) => {
  const { t } = useI18n(D);
  const { type } = props;

  return (
    <div className={$.menuBLD}>
      <div>
        <h3>
          <Text variant="mediumPlus" className={$.title}>
            {t('학생 식당')}
          </Text>
        </h3>
        <MealByPlace place="jigok" type={type} />
      </div>
      <div>
        <h3>
          <Text variant="mediumPlus" className={$.title}>
            {t('RIST 식당')}
          </Text>
        </h3>
        <MealByPlace place="rist" type={type} />
      </div>
    </div>
  );
};

export default ListByMeal;

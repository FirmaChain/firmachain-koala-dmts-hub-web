import React from 'react';
import { useParams } from 'react-router-dom';

import QuestDetailContainer from '../../../layouts/quest/detail';

const QuestDetail = () => {
  const { type } = useParams();

  return <QuestDetailContainer type={type} />;
};

export default React.memo(QuestDetail);

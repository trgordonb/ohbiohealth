import React from "react";
import styles from '../../styles/YesNoOption.module.css'
import { useTranslation } from 'react-i18next'

function YesNoOptions(props) {
  const { t, i18n } = useTranslation()
  const data = [
    {
      text: t('y'),
      handler: props.actionProvider.handleYes,
      id: 1
    },
    {
      text: t('n'),
      handler: props.actionProvider.handleNo,
      id: 2
    },
  ];
  const optionsList = data.map((option) => (
    <button className={styles.yesnobtn} key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}

export default YesNoOptions;
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className={styles.langBtn} onClick={toggleLanguage}>
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitcher;

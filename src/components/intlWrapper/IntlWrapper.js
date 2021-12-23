import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";

export const IntlContext = createContext();

const IntlWrapper = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(
    require(`../../languages/${locale}.json`)
  );

  const changeLang = (val) => {
    const messages = require(`../../languages/${val}.json`);
    setLocale(val);
    setMessages(messages);
  };

  return (
    <IntlContext.Provider value={{ locale, changeLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export default IntlWrapper;

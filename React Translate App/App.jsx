// 网址：https://codesandbox.io/s/react-forked-1clyyh?file=/src/App.js:0-836

import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import "./styles.css";
import Languages from "./components/languages";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "es",
      text: ""
    };
  }

  enterText = () => { //或许一个input的新值
    this.setState({ text: event.target.value });
  };

  languageChange = (newLanguage) => { //根据语言 生成新值
    this.setState({ language: newLanguage });
  };

  render() {
    const { language, text } = this.state;

    return (
      <div>
        <Field onChange={this.enterText} />
        <Languages language={language} onLanguageChange={this.languageChange} />
        <hr />
        <Translate text={text} language={language} />
      </div>
    );
  }
}

export default App;

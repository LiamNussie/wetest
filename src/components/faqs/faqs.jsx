import React, { useState, useEffect, useRef } from "react";
import "./faqs.scss";
import FaqsList from '../../static/faqs';

const Faqs = () => {

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if(clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }


  return (
    <div className="faqs">
      <h1 className="header">Frequently asked questions</h1>
      {FaqsList.map(({ question, answer }, index) => {
        return (
          <div className="item" key={index}>
            <div onClick={() => toggle(index)} key={index} className="top">
              <div className="question">{question}</div>
              <div className="expand">
                <i className="fas fa-plus" id={clicked === index ? 'times' : null}></i>
                {/* {clicked === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>} */}
              </div>
            </div>
            {clicked === index ? (<div className="answer">{answer}</div>) : null}
            
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
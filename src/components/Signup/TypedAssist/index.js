/* eslint-disable */

import React, { Component } from 'react';
import Typed from 'typed.js';

class TypedAssist extends Component {
  componentDidMount() {
    const baseOptions = {
      strings: this.props.strings,
      typeSpeed: 20,
      backSpeed: 0,
      showCursor: false,
    };

    const options = {
      ...baseOptions,
      ...this.props.options,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  componentWillUpdate() {
    this.typed.reset(true);
  }

  render() {
    return (
      <h1
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedAssist;

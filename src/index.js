import "./style.css";

import React, { Component, createRef } from "react";
import { render } from "react-dom";

const List = props => (
  <section>
    <div className="header">
      <h2>{props.title}</h2>
    </div>
    <div className="body">
      <ul>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
        <li>列表内容</li>
      </ul>
    </div>
  </section>
);

class ListBetter extends Component {
  constructor(props) {
    super(props);

    this.el = createRef();

    this.state = {
      header_style: null,
      placeholder_style: null
    };
  }

  render() {
    return (
      <section ref={this.el}>
        <div className="header-wrap" style={this.state.header_style}>
          <div className="header">
            <h2>{this.props.title}</h2>
          </div>
        </div>
        <div className="placeholder" style={this.state.placeholder_style} />
        <div className="body">
          <ul>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
            <li>列表内容</li>
          </ul>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.element = this.el.current;

    this.initHeight();
    // this.enablePlaceholder();
    this.enableSticky();
  }

  initHeight() {
    this.height_container = this.element.offsetHeight;
    this.height_header = this.element.querySelector(
      ".header-wrap"
    ).offsetHeight;
  }

  /**
   * 复制占位符
   */
  enablePlaceholder() {
    this.setState({
      placeholder_style: {
        height: `${this.height_header}px`
      }
    });
  }

  /**
   * 计算可滑动的高度
   * 可滑动高度 = 容器高度 - 浏览器高度 + 吸顶元素高度
   */
  enableSticky() {
    console.log("innerHeight", window.innerHeight);

    const wrapHeight =
      this.height_container - window.innerHeight + this.height_header;

    console.log(
      `整体高度${this.height_container}, 滑动高度 ${wrapHeight}, 浏览器高度 ${
        window.innerHeight
      }`
    );

    if (wrapHeight > 0) {
      this.setState({
        header_style: {
          position: "absolute",
          height: `${wrapHeight}px`
        }
      });

      this.enablePlaceholder();
    }
  }
}

const App = () => (
  <div className="container">
    <div className="debug">
      <p>调试信息：[浏览器高度:{window.innerHeight}]</p>
      <p>调试信息：[UA:{navigator.userAgent}]</p>
    </div>

    <div className="container-left">
      <List title="方案1" />
      <List title="方案1" />
    </div>

    <div className="container-right">
      <ListBetter title="方案2" />
      <ListBetter title="方案2" />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));

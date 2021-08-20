import React from 'react';
//import styled from 'styled-components'
import clsx from 'clsx';
import Highlight, { defaultProps } from "prism-react-renderer";

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

class TiViewer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        //this.theprops = props;
        //this.thechildren = props.children;
        console.log("The children:");
        //console.log(this.thechildren);
    }

    componentDidMount() {

    }

    render() {
        console.log("Rendering");
        console.log(this.thechildren);
        return (
            <div style={{border: "1px solid red"}}>
                <Highlight {...defaultProps} code={this.props.children} language={this.props.lang ?? "plaintext"}>
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
            </div>
        );
        // /*{JSON.stringify(this.theprops)}*/
    }
}

export {TiViewer};

// Source: https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

export {Clock};

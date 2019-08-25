import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import YAML from "yamljs";

const source = YAML.parse(
  `
- This is line 1a [width=6, variant=h3]
- This is line 2b [width=3, variant=h4]
- This is line 3 [width=6, variant=h3]
`
);
console.log(source);
const lines = source.map(line => {
  let matcher = line.match(/^(.*)\[(.*)\]/);
  if (matcher) {
    let replaced = matcher[2].replace(/=/g, ": ");
    replaced = replaced.replace(/[\s]*,[\s]*/g, "\n");
    let result = YAML.parse(replaced); //"JSON.parse(replaced)
    result.t = matcher[1];
    return result;
  }
  return line;
});

const text = YAML.parse(
  `- 
  t: this is a line
  w: 6
  v: h6
- 
  t: this is another
  w: 6
- line er
-
  t: this goes
`
);

ReactDOM.render(<Demo text={lines} />, document.querySelector("#root"));

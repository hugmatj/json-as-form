
<div align="center">
  <h1 align="center">
      json-as-form
  </h1>
  
  <p align="center">
    <a href="https://travis-ci.org/pastelsky/bundlephobia">
      <img src="https://img.shields.io/bundlephobia/minzip/json-as-form" />
    </a>
      <img alt="GitHub tag (latest SemVer)" src="https://img.shields.io/github/v/tag/firecampapp/json-as-form">
      <img src="https://img.shields.io/npm/l/package-build-stats.svg" />
  <a href="https://twitter.com/firecamphq" target="_blank">
      <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/FirecampHQ?label=follow%20%40Firecamp">
  </a>
  </p>
  <p align="center">
    Edit JSON like a Form <br />
  </p>
  <p align="center">
    A multi-purpose JSON editing tool that lets to edit JSON object as an intuitive JSON-like Form.
  </p>

  <pre align="center">
    npm i <a href="https://www.npmjs.com/package/json-as-form">json-as-form</a> / yarn add <a href="https://www.npmjs.com/package/json-as-form">json-as-form</a> </pre>

</div>

## Live Demo
https://codesandbox.io/s/json-as-form-demo-2si2l

# Usage
```javascript
import JSONForm from "json-as-form";

<JSONForm
  json={plainJsonObjORArray}
  onChange={data => console.log(data)}
  autoAddRow={true}
  debug={false}
  rowInterpolator={row=> {
    if(row.value) row.value = row.value.toLowerCase()
    return row
  }}
/>
```

**Props**

|name  | required | defaultvalue  | description |
|-- | -- | -- |--|
| json | yes | | `{}, []` plain JSON object or form state |
| onChange | yes | fn | get form state in callback based on `json` prop type|
| fixedKeys | no | [] | enum[ "key", "value"], non editable fields|
| autoAddRow | no | false | auto add new row |
| debug | no | false | if `true` then It'll print state |
| rowInterpolator | no | row=> row | interpolate the row data before` onChange` callback|

# LICENSE
MIT [@Firecamp ](https://twitter.com/firecamphq)

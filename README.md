



## json-as-form
##### Edit JSON like a Form

A multi-purpose JSON editing tool that lets to edit JSON object as an intuitive JSON-like Form.

### install
**yarn**
`yarn add json-as-form`

**npm**
`npm install json-as-form --save`

**Usage**
```
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

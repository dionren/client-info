# client-info
[![NPM version](https://badge.fury.io/js/client-info.png)](http://badge.fury.io/js/client-info)

<table>
<tr>
<td>Package</td><td>client-info</td>
</tr>
<tr>
<td>Description</td>
<td>Get client information, include os, browser, browser-shell, app wrap.</td>
</tr>
</table>

## Usage

#### Install

```sh
$ npm install --save client-info
```

## Example

```js
let clientInfo = require('client-info');

clientInfo.getBrowser()
// => {arch:'x86', os:'Linux', name:'Chrome', version:'42', fullVersion:'42.1246.0.12'}

clientInfo.getEnv()
// => 'weixin' or 'browser' or 'alipay'

```


## LICENSE [MIT](LICENSE)
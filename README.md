[![Coverage Status](https://coveralls.io/repos/github/livesession/livesession-sdk/badge.svg?branch=master)](https://coveralls.io/github/livesession/livesession-sdk?branch=master)
[![Livesession SDK](https://circleci.com/gh/livesession/livesession-sdk.svg?style=svg)](https://circleci.com/gh/livesession/livesession-sdk/)

# Official LiveSession SDK

This small package let you install LiveSession script and configure it properly.

If you need you can use methods that were also provided in this SDK.

**Important:** script by default is working only in production mode, but you can pass a third argument to init method to enable devMode

## Usage

`npm i @livesession/livesession-sdk` or `yarn add @livesession/livesession-sdk`

Next, you should initialize the SDK nn your website like in this example:

```javascript
import ls from "@livesession/livesession-sdk";

// init a script, trackID is required
ls.init("YOUR TRACKID", options, sdkOptions);
```

**Initialization example**

```javascript
ls.init("123456789", { keystrokes: true, rootHostname: ".mypage.com" });
// or with devMode on
ls.init(
  "1234.56789",
  { rootHostname: ".mypage.com" },
  {
    devMode: true, // process.env.NODE_ENV === "development"
  }
);
```

## React usage

```javascript
ls.init("YOUR-TRACK-ID", options, sdkOptions);
ReactDOM.render(<App />, document.getElementById("root"));
```

For more about initializing script check out our [guide](https://developers.livesession.io/javascript-api/configuration/)

## sdkOptions

As a third argument to init method you can pass sdkOptions object, here are all available variables:

| Variable | Parameter | Default | Info                                              |
| -------- | --------- | ------- | ------------------------------------------------- |
| devMode  | bool      | false   | Log methods into console instead of calling their |

**Example**

```javascript
ls.init("exampleID", null, { devMode: true });
```

## API

If you initialized script, you can simply customize it with following functions:

| Function          | Parameter                    | Default           | Allowed                          |
| ----------------- | ---------------------------- | ----------------- | -------------------------------- |
| init              | trackID, options, sdkOptions | null, null, false | string(required), object, object |
| getSessionURL     | callback(url, isNewSession)  | null              | void(string, bool)               |
| identify          | data                         | null              | object                           |
| invalidateSession | -                            | null              | -                                |
| newPageView       | options                      | null              | object                           |
| setOptions        | options                      | null              | object                           |
| setCustomParams   | data                         | null              | object                           |
| off               | -                            | null              | -                                |
| optOut            | -                            | false             | -                                |
| debug             | -                            | false             | -                                |

If out want to learn more about all methods, go to our [developers page](https://developers.livesession.io/javascript-api/methods/)

## Contributing

We're always open to work with our community. Let us know if you have ideas for new features or suggestions. Pull requests for bug fixes are also welcome!

## Changelog

This package currently support `v.1.1` of API, you can find more informations about API changelog [here](https://developers.livesession.io/getting-started/changelog/)

## License

[MIT](https://github.com/livesession/livesession-sdk/blob/master/LICENSE)

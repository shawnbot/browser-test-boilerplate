# Local Testing

1. Install and run [webdriver-manager]:

  ```sh
  # install webdriver-manager globally
  npm install -g webdriver-manager
  # install the Selenium binaries
  webdriver-manager update
  # run the local selenium server
  webdriver-manager start
  ```

2. Run the tests with the default config:

  ```sh
  npm test
  ```


# Using Sauce Labs

To use [Sauce Labs], set the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`
environment variables (for instance, with [autoenv]), then run:

```sh
wdio test/wdio.sauce.js
```

or, simply:

```sh
npm run test-sauce
```

[webdriver-manager]: https://www.npmjs.com/package/webdriver-manager
[Sauce Labs]: https://saucelabs.com/
[autoenv]: https://github.com/kennethreitz/autoenv

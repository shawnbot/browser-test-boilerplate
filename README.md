# Local Testing

1. Install and run [webdriver-manager]:

  ```
  # install webdriver-manager globally
  npm install -g webdriver-manager
  # install the Selenium binaries
  webdriver-manager update
  # run the local selenium server
  webdriver-manager start
  ```

2. [Run the tests](#running-the-tests)


# Running the Tests

1. If you're using [Sauce Labs], set the `SAUCE_USERNAME` and
   `SAUCE_ACCESS_KEY` environment variables, then run:

   ```
   wdio test/wdio.sauce.js
   ```

1. Otherwise, run:

  ```
  wdio test/wdio.conf.js
  ```


[webdriver-manager]: https://www.npmjs.com/package/webdriver-manager
[Sauce Labs]: https://saucelabs.com/

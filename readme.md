# next-js-dynamic-issue

Small repository that reproduces the issue reported in https://github.com/zeit/next.js/issues/5213

First `next build`:

```
yarn run v1.9.4
warning package.json: No license field
$ next build
[hardsource:9c6396f5] Writing new cache 9c6396f5...
[hardsource:5dfb5712] Writing new cache 5dfb5712...
[hardsource:9c6396f5] Tracking node dependencies with: yarn.lock.
[hardsource:5dfb5712] Tracking node dependencies with: yarn.lock.
[01:04:03] Compiling client
[01:04:03] Compiling server
[01:04:04] Compiled server in 1s
[01:04:07] Compiled client in 5s
Webpack Bundle Analyzer saved report to dev/tusbar/next-js-dynamic-issue/reports/bundles.html
✨  Done in 6.93s.
yarn build  10.62s user 0.84s system 156% cpu 7.309 total
```

Second `next build`:

```
win: next-js-dynamic-issue > yarn build
yarn run v1.9.4
warning package.json: No license field
$ next build
[hardsource:9c6396f5] Using 3 MB of disk space.
[hardsource:5dfb5712] Using 3 MB of disk space.
[hardsource:9c6396f5] Tracking node dependencies with: yarn.lock.
[hardsource:9c6396f5] Reading from cache 9c6396f5...
[hardsource:5dfb5712] Tracking node dependencies with: yarn.lock.
[hardsource:5dfb5712] Reading from cache 5dfb5712...
[01:04:17] Compiling server
[01:04:17] Compiling client
[01:04:17] Compiled server in 407ms
[01:04:20] Compiled client in 3s
Webpack Bundle Analyzer saved report to dev/tusbar/next-js-dynamic-issue/reports/bundles.html
✨  Done in 5.44s.
yarn build  8.61s user 0.74s system 160% cpu 5.830 total
```

Third `next build`:

```
win: next-js-dynamic-issue > yarn build
yarn run v1.9.4
warning package.json: No license field
$ next build
[hardsource:9c6396f5] Using 3 MB of disk space.
[hardsource:9c6396f5] Tracking node dependencies with: yarn.lock.
[hardsource:9c6396f5] Reading from cache 9c6396f5...
[hardsource:5dfb5712] Using 3 MB of disk space.
[hardsource:5dfb5712] Tracking node dependencies with: yarn.lock.
[hardsource:5dfb5712] Reading from cache 5dfb5712...
[01:05:10] Compiling client
[01:05:10] Compiling server
[hardsource:5dfb5712] Could not freeze ./components/dynamic-message.js: Cannot read property 'hash' of undefined
[01:05:10] Compiled server in 77ms
[hardsource:9c6396f5] Could not freeze ./components/dynamic-message.js: Cannot read property 'hash' of undefined
[01:05:10] Compiled client in 733ms
Webpack Bundle Analyzer saved report to dev/tusbar/next-js-dynamic-issue/reports/bundles.html
✨  Done in 2.96s.
yarn build  3.83s user 0.49s system 129% cpu 3.324 total
```

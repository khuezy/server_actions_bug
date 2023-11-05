## Bug Reproduction

1. `pnpm install`
2. `npm run dev`
3. Go to [http://localhost:3000](http://localhost:3000)
4. Click on "Click me"
5. Open console and see error

```
button.tsx:10 Uncaught (in promise) TypeError: (0 , _libsql_client_sqlite3__WEBPACK_IMPORTED_MODULE_0__.createClient) is not a function
```

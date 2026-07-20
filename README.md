# yousign

HttpClient generated from the latest version of yousign swagger.json file.

```
The swagger.json can be retrieved here: [https://developers.yousign.com/reference/oas-specification](https://developers.yousign.com/reference/oas-specification)

### Breaking changes:

Starting from version `0.0.4` this client use the definition of the yousign API v3.0 by default

```

### Changes in 2.0.0

- Pinned `swagger-typescript-api` to `13.12.5` (exact) so type generation is
  reproducible.
- Fixed duplicate `SignatureRequestEmailNotification` / `...Sender` type
  declarations (TS2300). The `SignatureRequest` response now uses
  `SignatureRequestEmailNotification1` / `...Sender1` (the generator's native
  numeric-suffix disambiguation); the create/update request bodies continue to
  use `SignatureRequestEmailNotification` / `...Sender`.
- The package now ships compiled `dist/api.js` + `dist/api.d.ts` (CommonJS)
  instead of raw TypeScript source.

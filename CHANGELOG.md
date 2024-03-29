# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0] - 2023-04-24

### Bug Fixes

- [Trying manual redirect to fix same domain requests not working.](https://github.com/fourjuaneight/shelf/commit/c003707ba77f051cfd9a9171d57c4e480b0c5dde)
- [Add cross-origin mode to fetch.](https://github.com/fourjuaneight/shelf/commit/44590065aa404fe60526b1dc9b31ad79050015a6)
- [Add resolve override for subdomain fetch.](https://github.com/fourjuaneight/shelf/commit/e16fe9e1d87cda002902375e261ccb4e351ef481)
- [Add host to header on same domain fetch.](https://github.com/fourjuaneight/shelf/commit/9d01a5927d74e09ba4ef3796431315f1eaaedda0)
- [Load games genres when queried.](https://github.com/fourjuaneight/shelf/commit/d2cf0365ae728b23d0effb129f7fadd6c092d1b9)
- [Minor syntax corrections.](https://github.com/fourjuaneight/shelf/commit/5fd8f73134330ce88ea8e870aa7b9e5d574c292a)

### Features

- [Add release creating on new tag via changelog action.](https://github.com/fourjuaneight/shelf/commit/4c3c4191d5e65b2ba94529ee26a9ef5f47b8b0b7)
- [Add aggregated shelf items on GET.](https://github.com/fourjuaneight/shelf/commit/6dbd62f416844ecc2908bac46211909bb6d9c014)

### Miscellaneous Tasks

- [Update Changelog.](https://github.com/fourjuaneight/shelf/commit/7996594adcbe8b8ce02058c65dfcd3d0661544cb)
- [Add logs for debugging.](https://github.com/fourjuaneight/shelf/commit/3e45636e3ca23831b1081e1c77057a9471fa7c7e)
- [Remove unnecessary logs.](https://github.com/fourjuaneight/shelf/commit/79f567699c17a48a0acdecb100ff7bc3bbd58a88)
- [Further debugging logs.](https://github.com/fourjuaneight/shelf/commit/3d8a03b2bfba7790b0cbe1968adbe34683acf208)
- [Log request object on catch.](https://github.com/fourjuaneight/shelf/commit/98726eae695b83f7e2683c8009f52889a48caad6)
- [Remove debug logs.](https://github.com/fourjuaneight/shelf/commit/00452a201f115259d52eeb5d5a009d11c018ebd1)
- [Update to v1.3.0.](https://github.com/fourjuaneight/shelf/commit/4698c9bd015c4623bc9978e13b5df6e13373d403)

## [1.2.0] - 2022-07-29

### Bug Fixes

- [Sign version tag commits.](https://github.com/fourjuaneight/shelf/commit/60712dba52a7d01359076ae88c3372cb43e6f3f8)

### Features

- [Add default commit message when version bumping.](https://github.com/fourjuaneight/shelf/commit/b91ee6e3fcd1cbae46008dd7a988fc2e2e59d8fc)
- [Return app version on response.](https://github.com/fourjuaneight/shelf/commit/3307dc6b66c83331dc17bf166a8ce767713bc874)

### Miscellaneous Tasks

- [Update Changelog.](https://github.com/fourjuaneight/shelf/commit/7531d5b16f01f8178f234de21e9b50fac6ba70ac)
- [Minor typing optimizations.](https://github.com/fourjuaneight/shelf/commit/e3c08b9fe36225aa9ddbc11db4046a502d09d2e6)
- [Update to v1.2.0.](https://github.com/fourjuaneight/shelf/commit/7a3bbf8d286d2447a609b5d7f9460560addd289e)

## [1.1.0] - 2022-07-25

### Bug Fixes

- [Update data var name to properly scope it.](https://github.com/fourjuaneight/shelf/commit/fa1a096c6f9c3029814283e774fa0aae1764397c)
- [Throw as string on error to pass message to response.](https://github.com/fourjuaneight/shelf/commit/6636e6f117de65f3b6c09292d1414d7b917d03ab)
- [Return mutation results.](https://github.com/fourjuaneight/shelf/commit/bfc3068101b11591db1e3a3517902a752ba34038)
- [Return correct prop on mutations.](https://github.com/fourjuaneight/shelf/commit/1fdfb6655ef373f4d768d860ebbbe506fec7ff5b)
- [Update insert mutation response body.](https://github.com/fourjuaneight/shelf/commit/ac01207ff2b3407cd4f18490bb2361dd62af1bb1)

### Features

- [Add category and genre lists.](https://github.com/fourjuaneight/shelf/commit/f45bbaff45c8867bec50cdec3bcdf0917ab6d1ca)
- [Add Hasura util methods for queries and mutations.](https://github.com/fourjuaneight/shelf/commit/2ee70d090f51bd1f8f0f1976c01c752e6c7c1478)
- [Add handler for all requests.](https://github.com/fourjuaneight/shelf/commit/8d04fb6f3f95d77c4a7cbd403ae7133bd2567bf9)
- [Add workflow to auto-deployments.](https://github.com/fourjuaneight/shelf/commit/dc1c77f18e3c99c7df2e6a045bec274a968b9d31)
- [Add search query method.](https://github.com/fourjuaneight/shelf/commit/99ce9c3b0e687019189fb2c9d5377b0d99b70ed4)
- [Forward requests if an exception is thrown during execution.](https://github.com/fourjuaneight/shelf/commit/5520fc93991617b9dbd67c6956180ec9a0c285c5)
- [Recieve auth key as header.](https://github.com/fourjuaneight/shelf/commit/a0613ed503bba4526e531a9cb16c9d9857690c4c)
- [Check for existing shelf item before adding new.](https://github.com/fourjuaneight/shelf/commit/a802dfcd916e10e3c294652a45c0a4b18dcfece2)
- [Add hasura tags query in place of static list.](https://github.com/fourjuaneight/shelf/commit/1f03b9b885227a50a6d5c9e244ec9bc94004c195)
- [Add id column to queries.](https://github.com/fourjuaneight/shelf/commit/a8f674d78efcab02c855580134ea74b905131a1a)
- [Order tags query by name ascending.](https://github.com/fourjuaneight/shelf/commit/053f4c4ba0a08aa8191f59a5475d283f811eca8c)
- [Add query for table column aggregate count.](https://github.com/fourjuaneight/shelf/commit/fb6c92374b7348efd0dfd2cf031f40463dba7d48)
- [Add changelog generation action.](https://github.com/fourjuaneight/shelf/commit/4a54abfc7b9e1b6e65d538d34f6ec1d22fe3be4d)
- [Update node version and migrate to pnpm.](https://github.com/fourjuaneight/shelf/commit/b2933869bfcdf239c72ec86d49ba7bccacdca8e3)

### Miscellaneous Tasks

- [Add node version and dependencies.](https://github.com/fourjuaneight/shelf/commit/dd5ac5056ea860549da3d1588f56255c327dcf20)
- [Add linter and formatter configs.](https://github.com/fourjuaneight/shelf/commit/5bbbff5c38a260ca3ecf4bff886661b172dd6c45)
- [Add gitignore.](https://github.com/fourjuaneight/shelf/commit/9cd360c67635e0f0fb4add1d2d3f4cea7f1e2dbf)
- [Add TS config.](https://github.com/fourjuaneight/shelf/commit/7b4c55b903a0ba055def55606ccc9af417584dc1)
- [Add wrangler config.](https://github.com/fourjuaneight/shelf/commit/278bad3b4822495ac1934c4a4194dd42b42859c2)
- [Add changelog generator config.](https://github.com/fourjuaneight/shelf/commit/047db13378de46bbde35cbc8ea3233f463660392)
- [Add Spaces config.](https://github.com/fourjuaneight/shelf/commit/3efde5079ae9626876d52cc9478392687041b449)
- [Add license and readme.](https://github.com/fourjuaneight/shelf/commit/61c520fb0e04d5c02e2ff9a2872ccb77df73890d)
- [Add typings.](https://github.com/fourjuaneight/shelf/commit/f1df72653663cc06ade8b06805b2d9bca4d8fa70)
- [Add index.](https://github.com/fourjuaneight/shelf/commit/d07b2aa5898d7a2d9b64688e671bdbc496f6c4d8)
- [Add logging on errors.](https://github.com/fourjuaneight/shelf/commit/7bb3858ede51bbe7ee3a641c9e2ddfadc5a7c809)
- [Add inline error logging on hasura requests.](https://github.com/fourjuaneight/shelf/commit/ed7abb13cac38bea044e7fda42fac13912335b5e)
- [Minor syntax corrections.](https://github.com/fourjuaneight/shelf/commit/c0dd1d50fdeffa799a2241fc43ba1fbe83447e13)
- [Install dependencies on separate step for caching.](https://github.com/fourjuaneight/shelf/commit/b76bc2a14fe4a5930e97747ec1e10d1a1842742d)
- [Better query error logging.](https://github.com/fourjuaneight/shelf/commit/3a7a9697b31c91c0a5bcdb966972ba7d19567759)
- [Update tags look up params.](https://github.com/fourjuaneight/shelf/commit/108e297b1c25aa20f40bd0da9a93bd4c92df7277)
- [Logging optimizations.](https://github.com/fourjuaneight/shelf/commit/febfe32493ad34979ee1b715f02d6d6cfffc1e03)
- [Minor syntax updates.](https://github.com/fourjuaneight/shelf/commit/06c9f5f8642fb8a19d31b7f0fd34a97f4558d600)
- [Update Changelog.](https://github.com/fourjuaneight/shelf/commit/ad853c09c0c92b334e8db6f9aa6eac45d67ed352)

<!-- generated by git-cliff -->

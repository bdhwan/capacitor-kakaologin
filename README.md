# capacitor-kakaologin

kakao login

## Install

```bash
npm install capacitor-kakaologin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`getAccessToken()`](#getaccesstoken)
* [`getAuthToken(...)`](#getauthtoken)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### getAccessToken()

```typescript
getAccessToken() => Promise<{ code?: string; error?: string; }>
```

**Returns:** <code>Promise&lt;{ code?: string; error?: string; }&gt;</code>

--------------------


### getAuthToken(...)

```typescript
getAuthToken(web_key: string, returnUrl: string) => Promise<{ code?: string; error?: string; }>
```

| Param           | Type                |
| --------------- | ------------------- |
| **`web_key`**   | <code>string</code> |
| **`returnUrl`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ code?: string; error?: string; }&gt;</code>

--------------------

</docgen-api>

# codesandbox-button

Custom Element that Shows a CodeSandbox demo when you click on it.

## Example

```html
<codesandbox-button sandbox-id="78bip" hide-navigation module="/src/main-component.js"></codesandbox-button>
```

## Properties

| Property         | Attribute         | Type                    | Default | Description                                      |
|------------------|-------------------|-------------------------|---------|--------------------------------------------------|
| `fontSize`       | `font-size`       | `number`                | 14      | font size                                        |
| `hideNavigation` | `hide-navigation` | `boolean`               | false   | when true, hides navigation in the iframe        |
| `module`         | `module`          | `string`                |         | path to the default module to display            |
| `sandboxId`      | `sandbox-id`      | `string`                |         | five-character id of your sandbox                |
| `showDemo`       | `show-demo`       | `boolean`               | false   | when true, shows the CodeSandbox instead of the button |
| `theme`          | `theme`           | `"light" \| "dark"`     | "dark"  |                                                  |
| `view`           | `view`            | `"editor" \| "preview"` |         |                                                  |

## `codesandbox-button.js`:

### class: `CodesandboxButton`, `codesandbox-button`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name             | Privacy | Type                  | Default  | Description                                            | Inherited From |
| ---------------- | ------- | --------------------- | -------- | ------------------------------------------------------ | -------------- |
| `fontSize`       |         | `number`              | `14`     | font size                                              |                |
| `hideNavigation` |         | `boolean`             | `false`  | when true, hides navigation in the iframe              |                |
| `sandboxId`      |         | `string`              |          | five-character id of your sandbox                      |                |
| `showDemo`       |         | `boolean`             | `false`  | when true, shows the CodeSandbox instead of the button |                |
| `module`         |         | `string`              |          | path to the default module to display                  |                |
| `theme`          |         | `'light'\|'dark'`     | `'dark'` |                                                        |                |
| `view`           |         | `'editor'\|'preview'` |          |                                                        |                |

#### Attributes

| Name              | Field          | Inherited From |
| ----------------- | -------------- | -------------- |
| `font-size`       | fontSize       |                |
| `hide-navigation` | hideNavigation |                |
| `sandbox-id`      | sandboxId      |                |
| `show-demo`       | showDemo       |                |
| `module`          | module         |                |
| `theme`           | theme          |                |
| `view`            | view           |                |

<details><summary>Private API</summary>

#### Methods

| Name           | Privacy | Description | Parameters | Return | Inherited From |
| -------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `getIframeSrc` | private |             |            |        |                |
| `onClick`      | private |             |            |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name                 | Declaration       | Module                | Package |
| --------------------------- | -------------------- | ----------------- | --------------------- | ------- |
| `js`                        | `CodesandboxButton`  | CodesandboxButton | codesandbox-button.js |         |
| `custom-element-definition` | `codesandbox-button` | CodesandboxButton | codesandbox-button.js |         |

<h1 align="center">
    &lt;vue-echo-children&gt;
</h1>

> Render multiple nodes in Vue

<p align="center">
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" alt="Powered By Responsibility"></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-by-hipsters.svg" alt="Built By Hipsters"></a>
</p>

## Installation

Via NPM:

```shell
npm install vue-echo-children
```

Via UNPKG (browser):

```html
<script src="https://unpkg.com/vue-echo-children"></script>
```

## Usage

### NPM Package

Global Install
```js
import Vue from 'vue'
import EchoChildren from 'vue-echo-children'

Vue.use(EchoChildren)
```

A La Carte

```js
import { EchoChildren } from 'vue-echo-children'

const MyComponent = {
    components: {
        EchoChildren
    },
    template: '<echo-children>...</echo-children>'
}
```

Vue Single File Component

```html
<template>
    <echo-children>
        <div>Multiple</div>
        <div>Root</div>
        <div>Nodes!</div>
    </echo-children>
</template>

<script>
    import { EchoChildren } from 'vue-echo-children'

    export default {
        components: {
            EchoChildren
        }
    }
</script>
```

### Browser

The `<echo-children>` component is installed globally by default. The library instance is located at `window.VueEchoChildren`.

Global Install (HTML)

```html
    <!-- All you need to do is use the component -->
    <echo-children>...</echo-children>
```

Global Install (JS)

```js
    // All you need to do is use the component
    new Vue({
        template: '<echo-children>..</echo-children>'
    })
```

Manual Usage (Global Install)

If the component failed to install to a global Vue instance, you can install it yourself.

```js
Vue.use(window.VueEchoChildren)
```

Manual Usage (A La Carte)

If the component failed to install to a global Vue instance and you don't want a global install.

```js
// Get the Vue component
const { EchoChildren } = VueEchoChildren

// es5
// var EchoChildren = VueEchoChildren.EchoChildren

// When creating your Vue components, add this as a child component
new Vue({
    components: {
        EchoChildren // <--
    }
})
```

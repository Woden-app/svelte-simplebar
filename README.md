# svelte-simplebar
A Svelte wrapper for SimpleBar

## Installation
### Npm
    npm install --save @woden/svelte-simplebar
### Yarn
    yarn add @woden/svelte-simplebar
    
## Basic Usage
```html
<script>
import SimpleBar from '@woden/svelte-simplebar'
</script>

<SimpleBar style="height: 200px; width: 200px">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</SimpleBar>
```

## Props
| Name | Type | Description | Default value |
| ---- | ---- | ----------- | ------------- |
| `autoHide` | Boolean | Lorem ipsum dolor sit amet | true |
| `scrollbarMinSize` | Number | Define the minimum scrollbar size in pixels. | 10 |
| `scrollbarMaxSize` | Number | Define the maximum scrollbar size in pixels. | 0 |
| `classNames` | Object | It is possible to change the default class names that SimpleBar uses. To get your own styles to work refer to simplebar.css to get an idea how to setup your css. [For more informations](https://github.com/Grsmto/simplebar/tree/master/packages/simplebar#classnames) | ```{ content: 'simplebar-content', scrollContent: 'simplebar-scroll-content', scrollbar: 'simplebar-scrollbar', track: 'simplebar-track' }``` |
| `forceVisible` | Boolean | You can force the track to be visible (same behaviour as overflow: scroll) using the forceVisible option. | false |
| `direction` | String | You can activate RTL support by passing the direction option | 'ltr' |
| `timeout` | Number | Define the delay until the scrollbar hides. Has no effect if autoHide is false. | 1000 |
| `clickOnTrack` | Boolean | Controls the click on track behaviour. | true |
| `class` | String | Apply one or more css class(es) on the component | none |
| `style` | String | Apply css inline styles on the component | none |

## Events
| Name | Description |
| ---- | ----------- |
| `scrollXReachStart` | This event fires when scrolling reaches the start of the x-axis. |
| `scrollXReachEnd` | This event fires when scrolling reaches the end of the x-axis. |
| `scrollYReachStart` | This event fires when scrolling reaches the start of the y-axis. |
| `scrollYReachEnd` | This event fires when scrolling reaches the end of the y-axis. |

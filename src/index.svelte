<script>
import 'simplebar/dist/simplebar.css'
import SimpleBar from 'simplebar'
import { onMount, createEventDispatcher } from 'svelte'

let element
let clazz
const dispatch = createEventDispatcher()
let simpleBar
let lastScrollTop

export let autoHide = true
export let scrollbarMinSize = 10
export let scrollbarMaxSize = 0
export let classNames = {
    content: 'simplebar-content',
    scrollContent: 'simplebar-scroll-content',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track'
}
export let forceVisible = false
export let direction = 'ltr'
export let timeout = 1000
export let clickOnTrack = 1000
export let style
export { clazz as class }

onMount(() => {
    simpleBar = new SimpleBar(element, {
        autoHide,
        scrollbarMinSize,
        scrollbarMaxSize,
        classNames,
        forceVisible,
        direction,
        timeout,
        clickOnTrack
    })

    simpleBar.getScrollElement().addEventListener('scroll', e => {
        const st = e.target.scrollTop

        if (st !== lastScrollTop) {
            if (e.target.scrollTop === 0)
                dispatch('scrollYReachStart')
            if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight)
                dispatch('scrollYReachEnd')
        } else {
            if (e.target.scrollLeft === 0)
                dispatch('scrollXReachStart')
            if (e.target.scrollLeft + e.target.clientWidth === e.target.scrollWidth)
                dispatch('scrollXReachEnd')
        }

        lastScrollTop = st <= 0 ? 0 : st
    })
})
</script>

<div bind:this={element} {style} class={clazz}>
    <slot />
</div>
# Script Loading

## Regular

- Scripts are fetched and executed **after the HTML is compelety parsed**
- never but in script file in head
- use body end

> Use if you need to support  old  browsers

```html
<script src="script.js"></script>
```

## Async

- Scripts are fetched **asynchronously** and executed **immediately**

- script is fetched (async) same time as HTML paring (head)
- when js execution, HTML paring stopped

- Usually the DOMContentLoaded event for all scripts to execute , expect for
  async scripts. So, DOMContentLoaded does **not** wait for an async script.
- Scripts **not** guaranteed to execute in order

> Use for 3rd-party scripts where order doesn't matter(e.g Google Analytics)

```html
<script async src="script.js"></script>
```

## Defer

- Scripts are fetched **asynchronously** and executed **after the HTML is completely parsed**
- script execute end of HTML parsing (head)
- HTML parsing not stopped

- DOMContentLoaded event fires **after** defer script is executed.
- Scripts are executed **in order**
> This is overall best soution! Use for Your own scripts , and when order matters (e.g including library)

```html
<script defer src="script.js"></script>
```

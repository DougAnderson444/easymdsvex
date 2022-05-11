<script>
	import { EasyMDSvex } from '@douganderson444/easymdsvex';

	let initialValue = `
---
title: Edit This Title in Frontmatter
phrase: place meta data here
count: 25
color: cadetblue
list: [1, 2, 3, 4, "boo"]

---

---
author: Doug Anderson
section: Frontmatter

---

<script>
let name = 'you'
	import List, { TaskList, Styling } from 'listavelte@latest'
<\/script>

# {title}! 
## Slightly smaller
### Even smaller
#### Really small

Hey {name}, {phrase} 

<div style='background-color: lightgreen; padding: 1em; margin:1em'>
Go ahead and try it 
<\/div>

*Style* **it** _too_! Use css, js, html,and Markdown (instructions are on the right of the toolbar under the ❔ sign.)

Import Svelte components from [npm](https://www.npmjs.com/package/listavelte) and paste it between two brackets like this: 

<List \/>

## made by {author} as specified in the {section} section



<Styling>
	<TaskList \/>
<\/Styling>
	
	`;
</script>

<EasyMDSvex {initialValue} />

<script>
	import { EasyMDSvex } from '@douganderson444/easymdsvex';

	let initialValue = `

---
author: Doug Anderson
section: Frontmatter

---

<script>
	let name = 'dude'
	import List from 'listavelte'
<\/script>


# Example MDSveX Minisite


Go ahead {name}, *make* **a** _note_!

Import Svelte components from [npm](https://www.npmjs.com/package/listavelte) and paste it between two brackets like this: 

<List \/>

## made by {author} as specified in the {section} section



	`;

	// , Styling
	// <Styling>
	// 	</Styling>
</script>

<EasyMDSvex {initialValue} />

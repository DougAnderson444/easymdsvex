<script>
	import { EasyMDSvex } from '@douganderson444/easymdsvex';

	let initialValue = `

<script>
	let name = 'dude'
	import List, { TaskList, Styling } from 'listavelte@0.1.1'
<\/script>

# Title 
Go ahead {name}, *make* **a** _note_!

<List \/>

Here is a named list, wrapped in style:


<Styling>
	<TaskList \/>
<\/Styling>
	`;

	// , Styling
	// <Styling>
	// 	</Styling>
</script>

<EasyMDSvex {initialValue} />

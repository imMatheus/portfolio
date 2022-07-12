import React from 'react'

interface DemoQuestionProps {}

const DemoQuestion: React.FC<DemoQuestionProps> = ({}) => {
	return (
		<div className="prose bg-gray-100 p-4">
			<h2>Simple addition</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus natus! Ducimus atque earum facere at,
				inventore ut quidem itaque possimus eum impedit officia debitis hic excepturi architecto vero quaerat quo
				nesciunt repellendus, quibusdam obcaecati recusandae nostrum? Ipsum, illo commodi laboriosam ullam dignissimos
				non voluptates, illum fuga eos tempore velit, porro corporis voluptate libero quos mollitia corrupti aliquam
				necessitatibus et dolores nisi! Cumque labore sapiente iure quod ea repellat mollitia, a explicabo dolore,
				itaque, ad beatae consequatur tenetur soluta iste molestiae pariatur dignissimos unde sit quasi voluptas
				corrupti illo nulla eius! Aliquid ipsam porro, hic expedita pariatur neque amet iste.
			</p>
			<pre>
				<code>lorem 122</code>
			</pre>
		</div>
	)
}

export default DemoQuestion

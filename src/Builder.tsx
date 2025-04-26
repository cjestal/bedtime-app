// import { useState } from "react";

export default function Example() {
	// const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
	// const [selectedEnvironment, setSelectedEnvironment] = useState<string | null>(
	// 	null
	// );
	// const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
	// const [story, setStory] = useState<string | null>(null);
	// const [storyTitle, setStoryTitle] = useState<string | null>(null);

	const themes = [
		"Courage",
		"Curiosity",
		"Sharing",
		"Wonder",
		"Gratitude",
		"Patience",
		"Honesty",
		"Helpfulness",
		"Belief",
		"Discovery",
	];

	const characters = [
		"Squirrels",
		"Dragons",
		"Badgers",
		"Fairies",
		"Robots",
		"Owls",
		"Clouds",
		"Flowers",
		"Turtles",
		"Fireflies",
	];

	const environments = [
		"Forest",
		"Ocean",
		"Castle",
		"Mountain",
		"Village",
		"Sky",
		"Garden",
		"Island",
		"Cave",
		"Meadow",
	];

	return (
		<>
			{/* Parameters */}
			<div className="">
				<div
					id="builder-1"
					className="bg-gradient-to-b from-gray-600 to-gray-700 py-24 sm:py-32"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
							<div className="mx-auto w-full max-w-xl lg:mx-0">
								<h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
									Select a theme that defines your story
								</h2>
								<p className="mt-6 text-lg text-gray-300">
									Choose a theme that resonates with your story and sets the
									tone for your journey. Let your imagination guide you.
								</p>
							</div>
							<div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-2 lg:mx-0 lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl">
								{themes.map((theme) => (
									<a
										href="#builder-2"
										key={theme}
										className="flex items-center rounded-2xl bg-orange-700 hover:bg-orange-600 p-10 justify-center cursor-pointer"
									>
										<span className="text-lg font-semibold text-white">
											{theme}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* builder 2 */}
				<div
					id="builder-2"
					className="bg-gradient-to-b from-gray-700 to-gray-800 py-24 sm:py-32"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
							<div className="mx-auto w-full max-w-xl lg:mx-0">
								<h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
									Set the environment where your story takes place
								</h2>
								<p className="mt-6 text-lg/8 text-gray-300">
									Choose an environment that will set the stage for your bedtime
									story. Let its ambiance and scenery inspire magical dreams.
								</p>
							</div>
							<div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-2 lg:mx-0 lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl">
								{environments.map((environment) => (
									<a
										href="#builder-3"
										key={environment}
										className="flex items-center rounded-2xl bg-fuchsia-700 hover:bg-fuchsia-600 p-10 justify-center cursor-pointer"
									>
										<span className="text-lg font-semibold text-white">
											{environment}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* builder 3 */}
				<div
					id="builder-3"
					className="bg-gradient-to-b from-gray-800 to-gray-900 py-24 sm:py-32"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
							<div className="mx-auto w-full max-w-xl lg:mx-0">
								<h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
									Select characters that shape your story
								</h2>
								<p className="mt-6 text-lg/8 text-gray-300">
									Choose up to three characters that will bring your bedtime
									story to life. Let their adventures and personalities inspire
									magical dreams.
								</p>
							</div>
							<div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-2 lg:mx-0 lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl">
								{characters.map((character) => (
									<a
										href="#builder-4"
										key={character}
										className="flex items-center rounded-2xl bg-green-700 hover:bg-green-600 p-10 justify-center cursor-pointer"
									>
										<span className="text-lg font-semibold text-white">
											{character}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Trigger */}
			<div id="builder-4" className="bg-gray-900 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
						<div className="mx-auto w-full max-w-xl lg:mx-0">
							<h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
								Generate your bedtime story
							</h2>
							<p className="mt-6 text-lg/8 text-gray-300">
								Generate a unique bedtime story based on your selected theme,
								environment, and characters. Let the magic unfold.
							</p>
						</div>
						<div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-2 lg:mx-0 lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl">
							<div className="col-span-3 flex justify-center">
								<button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-2xl">
									Create Story
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* result */}
			<div className="bg-gradient-to-b from-gray-900 to-gray-500 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 ">
					<div className="mx-auto  text-white w-full max-w-xl  gap-10 py-20 lg:px-40  lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl flex flex-col justify-center items-start">
						<h2 className="text-4xl font-semibold leading-relaxed text-pretty text-white sm:text-5xl mb-5">
							A Love Story Written in Rain and Sawdust
						</h2>
						<p className="text-lg leading-relaxed text-left">
							Rain lashed against the windows of the little bookshop, creating a
							cozy haven from the storm. Amelia, tucked away in a dusty corner,
							was lost in a worn copy of <em>"Wuthering Heights."</em> A
							particularly boisterous gust shook the building, sending a stack
							of books tumbling down beside her.
						</p>
						<p className="text-lg leading-relaxed text-left">
							"Oh, bother," she muttered, kneeling to pick them up.
						</p>
						<p className="text-lg leading-relaxed text-left">
							"Allow me," a voice rumbled. A hand, calloused but gentle, reached
							down to help.
						</p>
						<p className="text-lg leading-relaxed text-left">
							Amelia looked up. Liam, the quiet carpenter from next door, stood
							there, a sheepish grin on his face. He often came in to browse,
							the scent of sawdust clinging to his clothes. He was impossibly
							handsome with his kind eyes and perpetually tousled hair.
						</p>
						<p className="text-lg leading-relaxed text-left">
							"Thank you," she said, blushing.
						</p>
						<p className="text-lg leading-relaxed text-left">
							They spent the next few minutes re-shelving the books, their hands
							brushing occasionally. With each accidental touch, Amelia felt a
							spark. She'd always noticed Liam, the way he would study the
							titles, the soft smile that played on his lips.
						</p>
						<p className="text-lg leading-relaxed text-left">
							"I... I've always loved this shop," Liam said, clearing his
							throat. "The smell of old paper, the stories hidden within."
						</p>
						<p className="text-lg leading-relaxed text-left">
							Amelia smiled. "Me too. It's a world away from the storm outside."
						</p>
						<p className="text-lg leading-relaxed text-left">
							The rain continued to fall, but inside the bookshop, a different
							kind of storm was brewing. They talked for hours, sharing their
							favorite authors, their dreams, their fears. Amelia learned that
							Liam built furniture, not just houses, and that he dreamed of
							crafting beautiful things that would last for generations. Liam
							learned that Amelia wrote poetry in her spare time, filling
							notebooks with verses about love and loss.
						</p>
						<p className="text-lg leading-relaxed text-left">
							As the rain finally subsided, a sliver of sunset painted the sky
							in hues of orange and pink. Liam walked Amelia to her door,
							pausing on the porch.
						</p>
						<p className="text-lg leading-relaxed text-left">
							"I... I'd like to see you again, Amelia," he said, his voice
							hesitant.
						</p>
						<p className="text-lg leading-relaxed text-left">
							Amelia's heart skipped a beat. "I'd like that very much, Liam."
						</p>
						<p className="text-lg leading-relaxed text-left">
							He smiled, a slow, genuine smile that made her knees weak. He
							leaned in, and their lips met in a tentative, sweet kiss. It was
							like something out of a book, a moment of pure, unexpected magic.
						</p>
						<p className="text-lg leading-relaxed text-left">
							The storm had passed, leaving behind a world washed clean, and in
							the quiet aftermath, a love story had just begun, written in the
							language of books, sawdust, and shared dreams. They knew, somehow,
							that their story would be a long and beautiful one, filled with
							the quiet joy of finding each other in the middle of a downpour.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

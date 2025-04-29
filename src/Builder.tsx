import { useState } from "react";
export default function Example() {
	// const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
	// const [selectedEnvironment, setSelectedEnvironment] = useState<string | null>(
	// 	null
	// );
	// const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
	const [story, setStory] = useState<string[] | null>(null);
	const [title, setTitle] = useState<string | null>(null);
	const [moral, setMoral] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [selectedTheme, setSelectedTheme] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");
	const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

	// const [characters, setCharacters] = useState<string | null>(null);
	const url = "https://147.182.157.53:4000/generate";

	const generateStory = async () => {
		const qs = new URLSearchParams({
			theme: selectedTheme,
			location: selectedLocation,
			characters: selectedCharacters.join(","),
		}).toString().replace(/%2C/g, ",");
		const urlWithParams = `${url}?${qs.toString()}`;

		setIsLoading(true);
		const data = await fetch(urlWithParams).then((response) => {
			setIsLoading(false);
			return response.json();
		});
		setStory(data.story);
		setTitle(data.title);
		setMoral(data.moral);
		// setCharacters(data.character);
	};

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

	const chars = [
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

	const locations = [
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
				{/* theme */}
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
										onClick={() => setSelectedTheme(theme)}
										className={`flex items-center rounded-2xl p-10 justify-center cursor-pointer ${
											selectedTheme === theme
												? "bg-orange-700 shadow-[0_0_20px_5px_rgba(255,165,0,0.8)]"
												: "bg-orange-700 hover:bg-orange-600"
										}`}
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
									Set the location where your story takes place
								</h2>
								<p className="mt-6 text-lg/8 text-gray-300">
									Choose an location that will set the stage for your bedtime
									story. Let its ambiance and scenery inspire magical dreams.
								</p>
							</div>
							<div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-2 lg:mx-0 lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl">
								{locations.map((location) => (
									<a
										href="#builder-3"
										key={location}
										onClick={() => setSelectedLocation(location)}
										className={`flex items-center rounded-2xl p-10 justify-center cursor-pointer ${
											selectedLocation === location
												? "bg-fuchsia-700 shadow-[0_0_20px_5px_rgba(255,0,255,0.8)]"
												: "bg-fuchsia-700 hover:bg-fuchsia-600"
										}`}
									>
										<span className="text-lg font-semibold text-white">
											{location}
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
								{chars.map((char) => (
									<a
										// href="#builder-4"
										key={char}
										onClick={() => {
											if (selectedCharacters.includes(char)) {
												setSelectedCharacters(
													selectedCharacters.filter((c) => c !== char)
												);
											} else if (selectedCharacters.length < 3) {
												setSelectedCharacters([...selectedCharacters, char]);
											}
										}}
										className={`flex items-center rounded-2xl p-10 justify-center cursor-pointer ${
											selectedCharacters.includes(char)
												? "bg-green-700 shadow-[0_0_20px_5px_rgba(0,255,0,0.3)]"
												: "bg-green-700 hover:bg-green-600"
										}`}
									>
										<span className="text-lg font-semibold text-white">
											{char}
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
								<button
									onClick={generateStory}
									disabled={isLoading}
									className={`px-8 py-4 text-lg font-semibold text-white rounded-2xl cursor-pointer ${
										isLoading
											? "bg-orange-600 cursor-not-allowed"
											: "bg-orange-600 hover:bg-orange-500"
									}`}
								>
									{isLoading ? (
										<svg
											className="animate-spin h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
											></path>
										</svg>
									) : (
										"Create Story"
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* result */}
			{story && (
				<div className="bg-gradient-to-b from-gray-900 to-gray-500 py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8 ">
						<div className="mx-auto  text-white w-full max-w-xl  gap-8 py-20 lg:px-40  lg:max-w-none p-8 bg-slate-700/5 ring-1 ring-white/10 rounded-2xl flex flex-col justify-center items-start">
							<div className="text-center mb-8">
								<h3 className="text-4xl font-semibold leading-relaxed text-pretty text-white sm:text-5xl ">
									{title}
								</h3>
								<h3 className="text-lg font-medium text-orange-400 italic">
									Lesson: {moral}
								</h3>
							</div>
							{story?.length &&
								story.map((paragraph, index) => (
									<p key={index} className="text-lg leading-relaxed text-left">
										{paragraph}
									</p>
								))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

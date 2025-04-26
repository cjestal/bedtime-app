import {
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "AI-Powered Creative Stories",
		description:
			"Immerse yourself in imaginative tales crafted by AI, designed to spark creativity and wonder.",
		icon: ChatBubbleOvalLeftEllipsisIcon,
	},
	{
		name: "Customizable Bedtime Stories",
		description:
			"Tailor bedtime stories to your preferences, creating a unique and personal experience every night.",
		icon: PencilSquareIcon,
	},
	{
		name: "Imagination-Boosting Narratives",
		description:
			"Explore stories that encourage creativity and expand your imagination, perfect for dreamers of all ages.",
		icon: HeartIcon,
	},
	{
		name: "AI-Generated Story Worlds",
		description:
			"Discover rich, AI-created story worlds that transport you to magical places and inspire endless possibilities.",
		icon: TrashIcon,
	},
];

export default function Example() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
						Discover the magic of bedtime stories
					</h2>
					<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
						{features.map((feature) => (
							<div key={feature.name}>
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-orange-600">
										<feature.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 text-base/7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}

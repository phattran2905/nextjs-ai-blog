import Card from "./Card";

type Props = {};
export default function Other({}: Props) {
	return (
		<section className="mt-10">
			<hr className="border-1" />
			{/* Header */}
			<p className="font-bold text-2xl my-8">Other Trending Posts</p>

			<div className="sm:grid grid-cols-2 gap-16">
				<Card
					className="mt-5 sm:mt-0 bg-wh-500"
					imageHeight={"h-80"}
				/>
				<Card
					className="mt-5 sm:mt-0 bg-wh-500"
					imageHeight={"h-80"}
				/>
				<Card
					className="mt-5 sm:mt-0 bg-wh-500"
					imageHeight={"h-80"}
				/>
				<Card
					className="mt-5 sm:mt-0 bg-wh-500"
					imageHeight={"h-80"}
				/>
			</div>
		</section>
	);
}

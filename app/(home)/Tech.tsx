import { Post } from "@prisma/client";
import Card from "app/(shared)/Card";

type Props = {
	techPosts: Array<Post>;
};

export default function Tech({ techPosts }: Props) {
	return (
		<section>
			<hr className="border-1" />
			{/* Header */}
			<div className="flex items-center gap-3 my-8">
				<h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">HOT</h4>
				<p className="font-bold text-2xl">Latest News In Technology</p>
			</div>
			{/* Grid */}
			<div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
				<Card
					className="col-span-1 row-span-3 bg-wh-500"
					imageHeight={"h-96"}
					isLongForm={true}
					post={techPosts[0]}
				/>
				<Card
					className="col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between gap-3"
					imageHeight={"h-48"}
					isSmallCard={true}
					post={techPosts[1]}
				/>
				<Card
					className="col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between gap-3"
					imageHeight={"h-48"}
					isSmallCard={true}
					post={techPosts[2]}
				/>
				<Card
					className="col-span-1 row-span-1 bg-wh-500 mt-10 sm:mt-0 flex justify-between gap-3"
					imageHeight={"h-48"}
					isSmallCard={true}
					post={techPosts[3]}
				/>
			</div>
		</section>
	);
}

import { Post } from "@prisma/client";
import Card from "./Card";

type Props = { otherPosts: Array<Post> };
export default function Other({ otherPosts }: Props) {
	return (
		<section className="mb-16 pt-4">
			<hr className="border-1" />
			{/* Header */}
			<p className="font-bold text-2xl my-8">Other Trending Posts</p>

			<div className="sm:grid grid-cols-2 gap-16">
				<Card
					className="mt-5 sm:mt-0"
					imageHeight={"h-80"}
					post={otherPosts[0]}
				/>
				<Card
					className="mt-5 sm:mt-0"
					imageHeight={"h-80"}
					post={otherPosts[1]}
				/>
				<Card
					className="mt-5 sm:mt-0"
					imageHeight={"h-80"}
					post={otherPosts[2]}
				/>
				<Card
					className="mt-5 sm:mt-0"
					imageHeight={"h-80"}
					post={otherPosts[3]}
				/>
			</div>
		</section>
	);
}

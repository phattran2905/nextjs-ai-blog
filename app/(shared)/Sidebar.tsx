import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type Props = {};
export default function Sidebar({}: Props) {
	return (
		<section className="">
			{/* Header */}
			<h4 className="bg-wh-900 py-2 px-5 text-wh-50 text-xs text-center font-bold">
				Subscribe and Follow
			</h4>
			<div className="my-5 mx-5">
				<SocialLinks isDark />
			</div>
			<Subscribe />
			<div className="bg-wh-900 my-8">advert image</div>
			<h4 className="bg-wh-900 py-2 px-5 text-wh-50 text-xs text-center font-bold">
				About the Blog
			</h4>
			<div className="bg-wh-900 my-8">profile image</div>
			<h4 className="py-2 px-5 text-wh-500 text-center font-bold">Geoffrey Epstein</h4>
			<p className="text-wh-500 text-center text-sm">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At obcaecati quam quia fugit ab.
				Ad.
			</p>
		</section>
	);
}

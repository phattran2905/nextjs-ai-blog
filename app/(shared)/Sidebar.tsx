import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

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
			<div className="bg-wh-900 my-8">
				<Image
					className="hidden md:block my-8 w-full"
					alt="advert-2"
					placeholder="blur"
					src={Ad2}
					width={500}
					height={1000}
					style={{ objectFit: "cover" }}
				/>
			</div>
			<h4 className="bg-wh-900 py-2 px-5 text-wh-50 text-xs text-center font-bold">
				About the Blog
			</h4>
			<div className="flex justify-center my-3">
				<Image
					alt="about-profile"
					placeholder="blur"
					src={AboutProfile}
					style={{ width: " 500px", height: "250px", objectFit: "cover" }}
				/>
			</div>
			<h4 className="py-2 px-5 text-wh-500 text-center font-bold">Geoffrey Epstein</h4>
			<p className="text-wh-500 text-center text-sm">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At obcaecati quam quia fugit ab.
				Ad.
			</p>
		</section>
	);
}

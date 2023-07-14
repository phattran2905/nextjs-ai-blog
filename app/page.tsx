import Image from "next/image";
import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Other from "./(shared)/Other";

export default function Home() {
	return (
		<main className="px-10 leading-7">
			<Trending />
			<div className="md:flex gap-10 mb-5">
				<div className="basis-3/4">
					<Tech />
					<Travel />
					<Other />
					<div className="hidden md:block">
						<div>CTA Subcribe</div>
					</div>
				</div>
				<div className="basis-1/4">{/* Sidebar */}a</div>
			</div>
		</main>
	);
}

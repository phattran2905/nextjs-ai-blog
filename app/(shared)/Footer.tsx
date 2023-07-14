type Props = {};
export default function Footer({}: Props) {
	return (
		<footer className="bg-wh-900 text-wh-50 py-10 px-10">
			<div className="justify-between mx-auto gap-16 sm:flex">
				{/* FIRST COLUMN */}
				<div className="mt-16 basis-1/2 sm:mt-0">
					<h4 className="font-bold">BLOG OF THE FUTURE</h4>
					<p className="my-5">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam qui, libero veritatis
						architecto harum veniam? Assumenda neque excepturi aperiam molestias, sapiente ea
						possimus hic. Eos dolore fuga beatae animi minus.
					</p>
					<p>&copy; Blog of the Future All Right Reserved.</p>
				</div>
				{/* SECOND COLUMN */}
				<div className="mt-16 basis-1/4 sm:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Lorem ipsum sit amet.</p>
					<p className="my-5">Lorem ipsum dolor discord.</p>
					<p>Lorem, ipsum dolor.</p>
				</div>
				{/* THIRD COLUMN */}
				<div className="mt-16 basis-1/4 sm:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Lorem ipsum sit amet.</p>
					<p>(333) 456-8797</p>
				</div>
			</div>
		</footer>
	);
}

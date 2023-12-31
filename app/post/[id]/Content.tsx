"use client";

import { FormattedPost } from "@/app/types";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

type Props = { post: FormattedPost };
export default function Content({ post }: Props) {
	const [isEditable, setIsEditable] = useState<boolean>();

	const [title, setTitle] = useState<string>(post.title);
	const [titleError, setTitleError] = useState<string>("");
	const [tempTitle, setTempTitle] = useState<string>(title);

	const [content, setContent] = useState<string>(post.content);
	const [contentError, setContentError] = useState<string>("");
	const [temptContent, setTempContent] = useState<string>(content);

	const date = new Date(post?.createdAt);
	const options = { year: "numeric", month: "long", day: "numeric" } as any;
	const formattedDate = date.toLocaleDateString("en-US", options);

	const handleIsEditable = (bool: boolean) => {
		setIsEditable(bool);
		editor?.setEditable(bool);
	};

	const handleOnChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (title) setTitleError("");
		setTitle(e.target.value);
	};

	const handleOnChangeContent = ({ editor }: any) => {
		if (!(editor as Editor).isEmpty) setContentError("");

		setContent((editor as Editor).getHTML());
	};

	const editor = useEditor({
		extensions: [StarterKit],
		onUpdate: handleOnChangeContent,
		editorProps: {
			attributes: {
				class: "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
			},
		},
		content: content,
		editable: isEditable,
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate
		if (title === "") setTitleError("This field is required.");
		if (editor?.isEmpty) setContentError("This field is required.");
		if (title === "" || editor?.isEmpty) return;

		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				content,
			}),
		});

		const data = await response.json();

		handleIsEditable(false);
		setTempTitle("");
		setTempContent("");

		setTitle(data.title);
		setContent(data.content);
		editor?.commands.setContent(data.content);
	};

	return (
		<div className="prose w-full max-w-full mb-10">
			{/* BREADCRUMBS */}
			<h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>

			{/* CATEGORY AND EDIT */}
			<CategoryAndEdit
				isEditable={isEditable}
				handleIsEditable={handleIsEditable}
				title={post.title}
				setTitle={setTitle}
				tempTitle={tempTitle}
				setTempTitle={setTempTitle}
				temptContent={temptContent}
				setTempContent={setTempContent}
				editor={editor}
				post={post}
			/>

			<form
				action=""
				onSubmit={handleSubmit}
			>
				{/* Header */}
				<>
					{isEditable ? (
						<div>
							<textarea
								className="border-2 rounded-md bg-wh-50 p-3 w-full"
								placeholder="Title"
								name="title"
								id="title"
								value={title}
								onChange={handleOnChangeTitle}
							></textarea>
							{titleError && <p className="mt-1 text-primary-500">{titleError}</p>}
						</div>
					) : (
						<h3 className="font-bold text-3xl mt-3">{title}</h3>
					)}
					<div className="flex gap-3">
						<h5 className="font-semibold text-xs">{post.author}</h5>
						<h6 className="text-wh-300 text-xs">{formattedDate}</h6>
					</div>
				</>

				{/* Image */}
				<div className="relative w-auto mt-2 mb-16 h-96">
					<Image
						fill
						alt={post.title}
						src={post.image}
						sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
						style={{ objectFit: "cover" }}
					/>
				</div>

				{/* Article */}
				<Article
					contentError={contentError}
					editor={editor}
					isEditable={isEditable}
					setContent={setContent}
					title={title}
				/>

				{/* Submit button */}
				{isEditable && (
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
						>
							SUBMIT
						</button>
					</div>
				)}
			</form>

			{/* Social links */}
			<div className="hidden md:block mt-10 w-1/3">
				<SocialLinks isDark />
			</div>
		</div>
	);
}

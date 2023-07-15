import { FormattedPost } from "@/app/types";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Editor } from "@tiptap/react";

type Props = {
	isEditable?: boolean;
	handleIsEditable: (bool: boolean) => void;
	title: string;
	setTitle: (value: string) => void;
	tempTitle: string;
	setTempTitle: (value: string) => void;
	temptContent: string;
	setTempContent: (value: string) => void;
	editor: Editor | null;
	post: FormattedPost;
};
export default function CategoryAndEdit({
	isEditable,
	handleIsEditable,
	title,
	setTitle,
	tempTitle,
	setTempTitle,
	temptContent,
	setTempContent,
	editor,
	post,
}: Props) {
	const handleEnableEdit = () => {
		handleIsEditable(!isEditable);
		setTempTitle(title);
		setTempContent(editor?.getHTML() || "");
	};

	const handleCancelEdit = () => {
		handleIsEditable(!isEditable);
		setTitle(tempTitle);
		editor?.commands.setContent(temptContent);
	};

	return (
		<div className="flex justify-between items-center">
			<h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">{post?.category}</h4>
			<div className="mt-4">
				{isEditable ? (
					<div className="flex justify-between gap-3">
						<button onClick={handleCancelEdit}>
							<XMarkIcon className="h-6 w-6 text-accent-red" />
						</button>
					</div>
				) : (
					<button onClick={handleEnableEdit}>
						<PencilSquareIcon className="h-6 w-6 text-accent-red" />
					</button>
				)}
			</div>
		</div>
	);
}

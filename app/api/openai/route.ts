import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request, response: any) {
	try {
		const { title, role } = await request.json();

		// const apiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
		const apiResponse = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					// content: `Create small blog post with html tags based on this title: ${title}`,
					content: `Create 3 line  blog post with html tags based on this title: ${title}`,
				},
				{
					role: "system",
					content: `${role || "I am a helpful assistant"}. Write with html tags.`,
				},
			],
		});

		// On-demand revalidation
		// response.revalidate("/api/posts")

		return NextResponse.json(
			{ content: apiResponse.data.choices[0].message?.content },
			{ status: 200 }
		);
	} catch (error: any) {
		console.error("request error", error.message);
		NextResponse.json({ error: "error generating AI post" }, { status: 500 });
	}
}

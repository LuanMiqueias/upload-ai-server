import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscription } from "./routes/create-transcription";
import { generateCompletionRoute } from "./routes/generate-ia-completion";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
	origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscription);
app.register(generateCompletionRoute);

app.listen({ port: 3333 }).then(() => {
	console.log("Http running");
});

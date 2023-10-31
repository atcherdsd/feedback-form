import jsonServer from "json-server";
import path, { dirname } from "path";
import { DataFromForm, Status } from "../components/common/types";
import { errors, serverMessage } from "../components/common/utils";
import { fileURLToPath } from "url";
import serverValidate from "../components/common/serverValidate";

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const PORT = 5000;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post("/api", (req, res) => {
	const { nameValue, emailValue, phoneValue, messageValue, hasPhoneMatches } =
		req.body;

	const fields = serverValidate(
		nameValue,
		emailValue,
		phoneValue,
		messageValue,
		hasPhoneMatches,
	) as DataFromForm;

	if (
		Object.values(fields).some((field) => field === errors.empty) ||
		Object.values(fields).some((field) => field === errors.email) ||
		Object.values(fields).some((field) => field === errors.phone)
	) {
		return res
			.header("Content-Type", "application/json")
			.status(400)
			.send(
				JSON.stringify({
					status: Status.Error,
					fields,
				}),
			);
	} else {
		return res
			.header("Content-Type", "application/json")
			.status(200)
			.send(
				JSON.stringify({
					status: Status.Success,
					msg: serverMessage,
				}),
			);
	}
});

server.use(router);
server.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});

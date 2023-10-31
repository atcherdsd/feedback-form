import { ServerResponse, Store } from "../common/types";
import { HOSTNAME } from "../common/utils";

export const sendData = async (body: Store): Promise<ServerResponse> =>
	(
		await fetch(`${HOSTNAME}`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		})
	).json();

export default sendData;

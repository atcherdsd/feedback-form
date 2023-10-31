import { DataFromForm } from "./types";
declare const serverValidate: (name: string, email: string, phone: string, msg: string, hasPhoneMatches: boolean) => DataFromForm;
export default serverValidate;

export interface IApp {
    start(): void;
}
export type Store = {
    nameValue: string;
    emailValue: string;
    phoneValue: string;
    messageValue: string;
    hasPhoneMatches: boolean;
};
export declare enum Status {
    Error = "error",
    Success = "success"
}
export type ServerResponse = {
    status: Status.Error;
    fields: DataFromForm;
} | {
    status: Status.Success;
    msg: string;
};
export type DataFromForm = {
    inputName?: string;
    inputEmail?: string;
    inputPhone?: string;
    inputMessage?: string;
};

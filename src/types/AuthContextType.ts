export type AuthContextType = {
    apiKey: string;
    isAuthorized:boolean;
    url: string;
    authorize: (apiKey: string, url: string) => Promise<boolean|undefined>;
}
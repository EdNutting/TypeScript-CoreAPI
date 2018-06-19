declare interface Window {
    coreapi: coreapi;
    schemas: Schemas
    csrftoken: string;
}

declare class coreapi {
    public Client(config: ClientConfig): void;
    public auth: auth;
}

declare class ClientConfig {
    public auth: SessionAuthentication;
}

declare class auth {
    public SessionAuthentication(config: SessionAuthenticationConfig): void;
}

declare class Client {
    constructor(auth: SessionAuthentication);
    public action(document: any, keys: Array < string >, params?: any): Promise<any>;
}

declare class SessionAuthentication {
}

declare class SessionAuthenticationConfig {
    public readonly cookieString: string;
    public readonly csrfCookieName: string;
    public readonly csrfHeaderName: string;
}

declare interface Schemas {
    your_api: Schema;
}

declare interface Schema {
    content: any;
    description: string;
    title: string;
    url: string;
}

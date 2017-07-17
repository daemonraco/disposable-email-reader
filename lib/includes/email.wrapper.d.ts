export declare abstract class EmailWrapper {
    protected data: any;
    raw: any;
    constructor(raw: any);
    body(): string;
    date(): string;
    from(): string;
    id(): string;
    subject(): string;
    to(): string;
    protected abstract load(): void;
}

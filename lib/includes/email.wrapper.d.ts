export declare abstract class EmailWrapper {
    raw: any;
    constructor(raw: any);
    abstract body(): string;
    abstract date(): string;
    abstract from(): string;
    abstract id(): string;
    abstract subject(): string;
    abstract to(): string;
}

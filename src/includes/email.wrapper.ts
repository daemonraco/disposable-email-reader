export abstract class EmailWrapper {
    raw: any;

    constructor(raw: any) {
        this.raw = raw;
    }

    public abstract body(): string;
    public abstract date(): string;
    public abstract from(): string;
    public abstract id(): string;
    public abstract subject(): string;
    public abstract to(): string;
}
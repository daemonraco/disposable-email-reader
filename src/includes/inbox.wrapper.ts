export abstract class InboxWrapper {
    raw: any;

    constructor(raw: any) {
        this.raw = raw;
    }

    public abstract ids(): Array<any>;
    public abstract list(): Array<any>;
}
export declare abstract class InboxWrapper {
    raw: any;
    constructor(raw: any);
    abstract ids(): Array<any>;
    abstract list(): Array<any>;
}

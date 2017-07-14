import { EmailWrapper } from '../../includes/email.wrapper';

export class HarakiriMailEmailWrapper extends EmailWrapper {
    public body(): string {
        return typeof this.raw.bodyhtml !== 'undefined' ? this.raw.bodyhtml : this.raw.bodytext;
    }
    public date(): string {
        return this.raw.received;
    }
    public from(): string {
        return this.raw.from;
    }
    public id(): string {
        return this.raw._id;
    }
    public subject(): string {
        return this.raw.subject;
    }
    public to(): string {
        return this.raw.to;
    }
}
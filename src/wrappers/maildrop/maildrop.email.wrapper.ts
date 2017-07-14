import { EmailWrapper } from '../../includes/email.wrapper';

export class MailDropEmailWrapper extends EmailWrapper {
    public body(): string {
        return this.raw.body;
    }
    public date(): string {
        return this.raw.date;
    }
    public from(): string {
        return this.raw.sender;
    }
    public id(): string {
        return this.raw.id;
    }
    public subject(): string {
        return this.raw.subject;
    }
    public to(): string {
        return this.raw.recipient;
    }
}
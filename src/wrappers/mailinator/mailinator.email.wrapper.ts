import { EmailWrapper } from '../../includes/email.wrapper';

export class MailinatorEmailWrapper extends EmailWrapper {
    protected load(): void {
        if (typeof this.raw.data !== 'undefined') {
            this.data.id = this.raw.data.id;
            this.data.from = this.raw.data.fromfull;
            this.data.to = this.raw.data.headers.to;
            this.data.subject = this.raw.data.subject;
            this.data.body = this.raw.data.parts.length > 0 ? this.raw.data.parts[0].body : false;
            this.data.date = this.raw.data.time;
        } else {
            console.error('MailinatorEmailWrapper Error: Unable to read data\nResponse:', this.raw);
        }
    }
}
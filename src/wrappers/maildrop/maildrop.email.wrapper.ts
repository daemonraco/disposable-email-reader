import { EmailWrapper } from '../../includes/email.wrapper';

export class MailDropEmailWrapper extends EmailWrapper {
    protected load(): void {
        if (typeof this.raw.data !== 'undefined') {
            this.data.id = this.raw.id;
            this.data.from = this.raw.sender;
            this.data.to = this.raw.recipient;
            this.data.subject = this.raw.subject;
            this.data.body = this.raw.body;
            this.data.date = this.raw.date;
        } else {
            console.error('MailinatorEmailWrapper Error: Unable to read data\nResponse:', this.raw);
        }
    }
}
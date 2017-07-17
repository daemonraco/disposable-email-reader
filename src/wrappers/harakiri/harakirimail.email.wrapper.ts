import { EmailWrapper } from '../../includes/email.wrapper';

export class HarakiriMailEmailWrapper extends EmailWrapper {
    protected load(): void {
        if (typeof this.raw.data !== 'undefined') {
            this.data.id = this.raw._id;
            this.data.from = this.raw.from;
            this.data.to = this.raw.to;
            this.data.subject = this.raw.subject;
            this.data.body = typeof this.raw.bodyhtml !== 'undefined' ? this.raw.bodyhtml : this.raw.bodytext;
            this.data.date = this.raw.received;
        } else {
            console.error('HarakiriMailEmailWrapper Error: Unable to read data\nResponse:', this.raw);
        }
    }
}
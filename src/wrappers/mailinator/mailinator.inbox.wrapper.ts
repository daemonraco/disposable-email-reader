import { InboxWrapper } from '../../includes/inbox.wrapper';

export class MailinatorInboxWrapper extends InboxWrapper {
    public ids(): Array<any> {
        let out = [];

        for (let k in this.raw.messages) {
            out.push(this.raw.messages[k]._id);
        }

        return out;
    }
    public list(): Array<any> {
        let out: Array<any> = [];

        for (let k in this.raw.messages) {
            let entry = this.raw.messages[k];
            out.push({
                id: entry.id,
                from: entry.fromfull,
                subject: entry.subject,
                date: entry.time
            });
        }

        return out;
    }
}
import { InboxWrapper } from '../../includes/inbox.wrapper';

export class HarakiriMailInboxWrapper extends InboxWrapper {
    public ids(): Array<any> {
        let out = [];

        for (let k in this.raw.emails) {
            out.push(this.raw.emails[k]._id);
        }

        return out;
    }
    public list(): Array<any> {
        let out: Array<any> = [];

        for (let k in this.raw.emails) {
            let entry = this.raw.emails[k];
            out.push({
                id: entry._id,
                from: entry.from,
                subject: entry.subject,
                date: entry.received
            });
        }

        return out;
    }
}
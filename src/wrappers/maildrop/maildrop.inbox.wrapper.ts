import { InboxWrapper } from '../../includes/inbox.wrapper';

export class MailDropInboxWrapper extends InboxWrapper {
    public ids(): Array<any> {
        let out: Array<any> = [];

        for (let k in this.raw) {
            out.push(this.raw[k].id);
        }

        return out;
    }
    public list(): Array<any> {
        let out: Array<any> = [];

        for (let k in this.raw) {
            let entry = this.raw[k];
            out.push({
                id: entry.id,
                from: entry.sender,
                subject: entry.subject,
                date: entry.date
            });
        }


        /*
        DEBUG MailDropInboxWrapper {
  raw:
   [ { id: 'IvqK1x',
       sender: 'alejandro.dario.simi@accenture.com',
       subject: 'test ',
       date: 'Jul 14 2017 05:31 AM' } ] }
       */
        return out;
    }
}
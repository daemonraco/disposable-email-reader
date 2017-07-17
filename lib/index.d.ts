import { EmailWrapper } from './includes/email.wrapper';
import { Inbox } from './includes/inbox';
import { InboxWrapper } from './includes/inbox.wrapper';
import { HarakiriMail } from './wrappers/harakiri/harakirimail.wrapper';
import { MailDrop } from './wrappers/maildrop/maildrop.wrapper';
import { Mailinator } from './wrappers/mailinator/mailinator.wrapper';
declare const _default: {
    HarakiriMail: typeof HarakiriMail;
    MailDrop: typeof MailDrop;
    Mailinator: typeof Mailinator;
    types: {
        EmailWrapper: typeof EmailWrapper;
        Inbox: typeof Inbox;
        InboxWrapper: typeof InboxWrapper;
    };
};
export = _default;

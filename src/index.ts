import { EmailWrapper } from './includes/email.wrapper';
import { Inbox } from './includes/inbox';
import { InboxWrapper } from './includes/inbox.wrapper';

import { HarakiriMail } from './wrappers/harakiri/harakirimail.wrapper';
import { MailDrop } from './wrappers/maildrop/maildrop.wrapper';
import { Mailinator } from './wrappers/mailinator/mailinator.wrapper';

export = {
    HarakiriMail: HarakiriMail,
    MailDrop: MailDrop,
    Mailinator: Mailinator,
    types: {
        EmailWrapper: EmailWrapper,
        Inbox: Inbox,
        InboxWrapper: InboxWrapper
    }
};
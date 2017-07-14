import { EmailWrapper } from '../../includes/email.wrapper';
export declare class MailDropEmailWrapper extends EmailWrapper {
    body(): string;
    date(): string;
    from(): string;
    id(): string;
    subject(): string;
    to(): string;
}

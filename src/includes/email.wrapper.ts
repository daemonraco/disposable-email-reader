export abstract class EmailWrapper {
    protected data: any = {
        body: false,
        date: false,
        from: false,
        id: false,
        subject: false,
        to: false
    };
    public raw: any;

    constructor(raw: any) {
        this.raw = raw;

        this.load();
    }

    public body(): string {
        return this.data.body;
    }
    public date(): string {
        return this.data.date;
    }
    public from(): string {
        return this.data.from;
    }
    public id(): string {
        return this.data.id;
    }
    public subject(): string {
        return this.data.subject;
    }
    public to(): string {
        return this.data.to;
    }

    protected abstract load(): void;
}
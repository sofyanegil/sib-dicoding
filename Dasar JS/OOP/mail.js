class BaseMailTemplate {
  constructor(from, to, subject, text) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
  }
}

class SMSABC extends BaseMailTemplate {
  constructor(from, to, subject, text) {
    super(from, to, subject, text);
  }
}

class EmailABC extends BaseMailTemplate {
  constructor(from, to, subject, text) {
    super(from, to, subject, text);
  }
}

class MailGroupABC extends BaseMailTemplate {
  constructor(from, to, subject, text) {
    super(from, to, subject, text);
  }
}

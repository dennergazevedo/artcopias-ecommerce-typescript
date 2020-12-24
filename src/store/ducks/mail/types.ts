/* eslint-disable no-shadow */
/** Action types */
export enum MailTypes {
  MAIL_CONTACT_REQUEST = '@mail/MAIL_CONTACT_REQUEST',
  MAIL_BUDGET_REQUEST = '@mail/MAIL_BUDGET_REQUEST',
}

/** Data types */
export interface IMail {
  email: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export interface IBudget {
  name: string;
  phone: string;
  product: string;
  message: string;
  company: string;
  email: string;
}

/** State types */
export interface IMailState {
  readonly error: boolean;
}

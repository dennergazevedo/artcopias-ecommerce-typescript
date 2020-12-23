/* eslint-disable no-shadow */
/** Action types */
export enum MailTypes {
  MAIL_CONTACT_REQUEST = '@mail/MAIL_CONTACT_REQUEST',
  MAIL_CONTACT_SUCCESS = '@mail/MAIL_CONTACT_SUCCESS',
  MAIL_CONTACT_FAILURE = '@mail/MAIL_CONTACT_FAILURE',
}

/** Data types */
export interface IMail {
  email: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
}

/** State types */
export interface IMailState {
  readonly error: boolean;
}

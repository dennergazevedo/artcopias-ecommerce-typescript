/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { IMail, MailTypes } from './types';

export const mailContactRequest = (data: IMail) =>
  action(MailTypes.MAIL_CONTACT_REQUEST, { data });

export const mailContactSuccess = () => action(MailTypes.MAIL_CONTACT_SUCCESS);

export const mailContactFailure = () => action(MailTypes.MAIL_CONTACT_FAILURE);

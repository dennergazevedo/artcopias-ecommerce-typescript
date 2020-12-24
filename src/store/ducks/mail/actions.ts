/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { IMail, MailTypes, IBudget } from './types';

export const mailContactRequest = (data: IMail) =>
  action(MailTypes.MAIL_CONTACT_REQUEST, { data });

export const mailBudgetRequest = (data: IBudget) =>
  action(MailTypes.MAIL_BUDGET_REQUEST, { data });

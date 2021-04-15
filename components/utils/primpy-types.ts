import { IGame } from "./common-types";

export interface IPrimpyError {
  code: number;
  type: string;
  message: string;
  level?: string;
  meta?: IPrimpyErrorMeta;
}

export interface IPrimpyErrorMeta {
  gameId: number;
  endpointPath: string;
  endpointClass: string;
}

export type IPrimpyMeta = any;
export type IPrimpyData = any;

export interface IPrimpySupportContact {
  contactId: number;
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
}
export interface IPrimpyResponse {
  errors?: IPrimpyError[];
  error?: IPrimpyError;
  supportContacts: IPrimpySupportContact[];
  meta?: IPrimpyMeta;
  data?: IPrimpyData;
}
export interface IPrimpyGameResponse extends IPrimpyResponse {
  data: IGame[];
}

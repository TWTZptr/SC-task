export type Response<T> = {
  data?: T;
  status?: number;
  msg?: string;
  ok: boolean;
};

import { City } from "../types/City";
import { Response } from "../types/Response";
import { sendRequest } from "../utils/SendRequest";

export const getAllCities = async (): Promise<Response<City[]>> =>
  sendRequest<City[]>("get", "/cities");

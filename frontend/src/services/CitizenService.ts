import { Citizen } from "../types/Citizen";
import { sendRequest } from "../utils/SendRequest";
import { Response } from "../types/Response";

export const getAllCitizens = async (): Promise<Response<Citizen[]>> =>
  sendRequest("get", "/citizens");

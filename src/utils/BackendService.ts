import { Dao } from "./../database/dao";
import fetch from "node-fetch";

export class BackendService {
  baseUri: string;

  constructor() {
    this.baseUri = process.env.BACKEND_URI;
  }

  getPostheaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  async postPing(msg: string) : Promise<string> {
    let response = await fetch(this.baseUri + "/get-ping", {
      method: "POST",
      headers: await this.getPostheaders(),
      body: JSON.stringify({
        text: msg,
      }),
    });

    response = await response.json();

    return response.message;
  }
}

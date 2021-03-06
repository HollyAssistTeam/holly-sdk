import got from "got";

export class DevicesAPI {
  constructor(app) {
    this.app = app;
  }

  getAll(with_latest_event) {
    return got(`${this.app.api.url}/devices?with_latest_event=` + (with_latest_event ? 1 : 0), {
      method: "GET",
      json: true
    }).then(res => {
      return res.body.devices;
    });
  }
  instruct(deviceId, instruction) {
    return got(`${this.app.api.url}/devices/${deviceId}/instructions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ instruction }),
      json: true
    });
  }
}

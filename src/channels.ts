import "@feathersjs/transport-commons";
import { HookContext } from "@feathersjs/feathers";
import { Application } from "./declarations";

export default function (app: Application) {
  if (typeof app.channel !== "function") {
    return;
  }

  app.on("connection", (connection: any) => {
    app.channel("anonymous").join(connection);
  });

  // eslint-disable-next-line no-unused-vars
  app.publish((data: any, hook: HookContext) => {
    console.log(data);

    return app.channel("anonymous");
  });
}

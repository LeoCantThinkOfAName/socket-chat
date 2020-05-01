import { Service, MemoryServiceOptions } from "feathers-memory";
import { Application } from "../../declarations";
import { Id } from "@feathersjs/feathers";

export interface MessageObj {
  id?: Id;
  name: string;
  message: string;
  img: string;
}

export class Message extends Service<MessageObj> {
  messages: MessageObj[] = [];

  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
    this.messages = [];
  }

  async find() {
    return this.messages;
  }

  async create(data: MessageObj) {
    const { name, message, img } = data;
    const newMessage = {
      id: new Date().getTime(),
      name,
      message,
      img,
    };

    this.messages.push(newMessage);
    return newMessage;
  }
}

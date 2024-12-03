import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("__INIT SOCKET SERVER__");
    this._io = new Server();
  }

  public initListeners() {
    const io = this._io;
    console.log("__INIT SOCKET LISTENERS__");
    io.on("connect", (socket) => {
      console.log(`connected to socket: ${socket.id}`);

      socket.on("event:message", ({ message }: { message: string }) => {
        console.log(`Message recieved: ${message}`);
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;

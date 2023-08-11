import express, { Express, Request, Response } from "express";
import path from "path";
import { INDEX_ROUTER } from "./constants/routersPathConstants";
import { OK_REQUEST_CODE_NUMBER } from "./constants/httpRequestCodeNumberConstants";

const server: Express = express();

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get(INDEX_ROUTER, (req: Request, res: Response) => {
  res
    .status(OK_REQUEST_CODE_NUMBER)
    .sendFile(path.join(__dirname, "..", "public", "htmls", "index.html"));
});

export default server;

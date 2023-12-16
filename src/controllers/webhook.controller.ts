import axios from "axios";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import piexif, { IExif, IExifElement, TagValues } from "piexif-ts";

export async function post(req: Request, res: Response) {
  console.log(JSON.stringify(req.body));
  const { data } = await axios.get(
    "https://api.telegram.org/file/bot6794302762:AAH26J9Vbu-734RBF6NgAPaIbKyEvZobzrA/photos/file_0.jpg",
    {
      responseType: "arraybuffer",
    }
  );
  const base64 = Buffer.from(data, "binary").toString("binary");
  piexif.
  // fs.writeFileSync(path.join(process.cwd(), "tmp", "test.jpg"), data);

  res.status(200).send("pong");
}

const webhookController = {
  post,
};

export default webhookController;

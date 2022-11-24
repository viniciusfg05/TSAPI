import * as fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    console.log(file);

    const stream = fs.createReadStream(file.path);

    stream.pipe();
  }
}

export { ImportCategoryUseCase };

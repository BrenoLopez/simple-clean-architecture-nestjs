export class ErrorHandler extends Error {
  name: string;
  constructor(error: Error) {
    super(error.message);
    this.name = error.name;
  }
}

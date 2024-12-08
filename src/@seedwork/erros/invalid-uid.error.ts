export default class InvalidUIDError extends Error {
  constructor(uid: string) {
    super(`Invalid UID: ${uid}`);
    this.name = 'InvalidUIDError';
  }
}
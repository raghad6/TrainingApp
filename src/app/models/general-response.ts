export class GeneralResponse<T> {
  message!: T;
  success!: boolean;
  error!: boolean;
}

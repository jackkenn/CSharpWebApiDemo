export class User {
  constructor(
    public id: undefined | number = 0,
    public firstName: undefined | string = '',
    public lastName: undefined | string = '',
    public role: undefined | string = '',
    public email: undefined | string = '',
    public portalAccess: undefined | boolean = false,
    public invitedStatus: undefined | string = '',
    public lastLogin: undefined | number = 0,
    public username: undefined | string = '',
    public password: undefined | string = ''
  ) {}
}

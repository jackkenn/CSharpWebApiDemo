export class User {
  public id?: undefined | number = 0;
  public firstName?: undefined | string = '';
  public lastName?: undefined | string = '';
  public role?: undefined | string = '';
  public email?: undefined | string = '';
  public portalAccess?: undefined | boolean = false;
  public invitedStatus?: undefined | string = '';
  public lastLogin?: undefined | number = 0;
  public username?: undefined | string = '';
  public password?: undefined | string = '';

  constructor(
    id?: number, 
    firstName?: string,
    lastName?: string,
    role?: string,
    email?: string,
    portalAccess?: boolean,
    invitedStatus?: string,
    lastLogin?: number,
    username?: string,
    password?: string
  ) {
    id? this.id = id : this.id = 0;
    firstName? this.firstName = firstName : this.firstName = '';
    lastName? this.lastName = lastName : this.lastName = '';
    role? this.role = role : this.role = '';
    email? this.email = email : this.email = '';
    portalAccess? this.portalAccess = portalAccess : this.portalAccess = false;
    invitedStatus? this.invitedStatus = invitedStatus : this.invitedStatus = '';
    lastLogin? this.lastLogin = lastLogin : this.lastLogin = 0;
    username? this.username = username : this.username = '';
    password? this.password = password : this.password = '';
  }
}

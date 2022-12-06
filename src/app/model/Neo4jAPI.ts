export class Neo4jAPI {
     SERVER_ROOT_URI:string;
     username :string;
      password :string;
  query:string;
  status:number;
  response:any;

constructor(SERVER_ROOT_URI:string, username:string, password:string,query:string,response:any,status:number) {
this.SERVER_ROOT_URI = SERVER_ROOT_URI;
this.username = username;
this.password = password;
this.query = query;
this.status = status;
this.response = response;

}

}

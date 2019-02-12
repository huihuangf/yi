let server='';
if(process.env.NODE_ENV=='development'){
  //  alert(process.env.NODE_ENV);
    server='http://localhost:8081/'
}else{
    server='http://localhost:8081/'
}
export const  SERVER=server;
//alert(SERVER)
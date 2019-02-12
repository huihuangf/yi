export async function fetch_form(form){
    let formdata=new FormData(form);
    let res=await fetch(form.action,{
        method:form.method,
        body:formdata
    })
   return  await res.json()
}
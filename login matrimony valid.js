/*clear error functions */
function clearError()
{
    error=document.getElementsByClassName('formerror');
    for(let item of error)
    {
        item.innerHTML="";
    }
}
/*set error functions */
function seterror(id ,error)
{
      element=document.getElementById(id);
      element.getElementsByClassName('formerror')[0].innerHTML=error;

}
/* validate functions */
function formvalidations()
{
    let x=true;
    clearError();
   
   
    
    /* email validations */
    let email=document.forms['myform']["femail"].value;
    if(email.length>50)
    {
        seterror("email", "*Email Length is too long");
        x=false;
    }
    
    /*password validations */
    let password=document.forms['myform']["fpass"].value;
    if(password.length<6)
    {
        seterror("pass" , "*password should be atleast 6 character long!");
        x=false;
    }

    /*phone number validations */
    let phone_no=document.forms['myform']["fphone"].value;
    if(isNaN(phone_no))
       {
           seterror("phone","*phone  number should be only number.");
           x=false;
       }
    if(phone_no.length<10)
    {
       seterror("phone","*Length of phone number is not matched.");
       x=false;
    }
    if(phone_no.length==0)
       {
           seterror("phone","*Length of phone number cannot be zero!");
           x=false;
       }
       if(phone_no.length>10)
        {
           seterror("phone","*Length of phone number must be 10 only.");
           x=false;
        }
    return x;
}
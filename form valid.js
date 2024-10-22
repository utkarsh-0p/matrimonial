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
    /* first name validations */
    let ftname=document.forms['myform']["fname"].value;
    if(ftname.length<5)
    {
        seterror("name","*Length of First Name is too short");
        x=false;
    }
    if(ftname.length==0)
    {
        seterror("name","*Length of First Name cannot be zero!");
        x=false;
    }
    /*last name validations */
    let ltname=document.forms['myform']["flname"].value;
       if(ltname.length<2)
        {
            seterror("lname","*Length of Last Name is too short");
            x=false;
        }
        if(ltname.length==0)
        {
            seterror("lname","*Length of Last Name cannot be zero!");
            x=false;
        }
    
     /*phone number validations */
     let phone_no=document.forms['myform']["fphone"].value;
     if(isNaN(phone_no))
        {
            seterror("phone","*phonne  number should be only number.");
            x=false;
        }
     if(phone_no.length<10)
     {
        seterror("phone","*Length of phone number is not matched.");
        x=false;
     }
     if(phone_no.length>10)
        {
           seterror("phone","*Length of phone number should not be more than 10.");
           x=false;
        }

     if(phone_no.length==0)
        {
            seterror("phone","*Length of phone number cannot be zero!");
            x=false;
        }
    /* email validations */
    let email=document.forms['myform']["femail"].value;
    if(email.length>50)
    {
        seterror("email", "*Email Length is too long");
        x=false;
    }
    /*confirm email validations */
    let cmail=document.forms['myform']["fcemail"].value;
    if(cmail!=email)
    {
        seterror("cemail","*Email and Confirm Email should be  matched!");
        x=false;
    }
    /*password validations */
    let password=document.forms['myform']["fpass"].value;
    if(password.length<6)
    {
        seterror("pass" , "*password should be atleast 6 character long!");
        x=false;
    }
    /*confirm password validations */
    let confirm_password=document.forms['myform']["fcpass"].value;
    if(confirm_password!=password)
    {
        seterror("cpass","*Password and Confirm password should match!");
        x=false;
    }
    return x;
}
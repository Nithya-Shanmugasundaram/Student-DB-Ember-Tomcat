import Route from '@ember/routing/route';

export default Route.extend({

   model()
    {
        var url="verify_login";
            var request = new XMLHttpRequest();
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                           const val = this.responseText;
                           const val2=val.trim();
                           if(val2=='student')
                           {
                            //alert("transfering to login page");
                             window.location='#/student';
                           }
                           else
                           {
                            alert("invalidd credentials");
                                window.location='#/';
                           }
                           /*if(val=='student')
                           {
                            window.location='#/management';
                           }*/
                        }
                        else
                        {
                            window.location='#/';
                        }
                    }
                }
            }
            catch(e){
                    alert(e);
            }
    },
    actions:
    {
        stu_logout()
        {
           //sessionStorage.removeItem("stu_sess");
           var url="sys_logout";
            var request = new XMLHttpRequest();
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                           alert("logging out");
                           window.location='#/';
                        }
                        else{
                            alert("logout failed");
                        }
                    }
                }
            }
            catch(e){
                    alert(e);
            }
           
        },
        reeval_app()
        {
           var url="reeval_app?sem_no="+document.getElementById("sem_no").value + "&roll_no=" + document.getElementById("roll_no").value + "&mailid=" + document.getElementById("mailid").value
                + "&sub=" + document.getElementById("sub").value;
                var request = new XMLHttpRequest();
                try{
                    request.open("POST",url,true);
                    request.send();
                    request.onreadystatechange = function () {
                        if (this.readyState == 4){
                            if(this.status==200)
                            {
                               alert("Applied for Reevaluation successfully");
                            }
                            else{
                                alert("Application failed");
                            }
                        }
                    }
                }
                catch(e){
                        alert(e);
                }
        },
        
    }
});

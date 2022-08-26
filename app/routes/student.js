import Route from '@ember/routing/route';

export default Route.extend({

   model()
    {
        /*var url="verify_login";
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
                       /* }
                        else
                        {
                            window.location='#/';
                        }
                    }
                }
            }
            catch(e){
                    alert(e);
            }*/

            var url="user_role_check";
            var request = new XMLHttpRequest();
            //var val="";
            try{
                request.open("GET",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                            var val= this.responseText;
                            var val_trim=val.trim();
                            if(val_trim==="management")
                            {
                                window.location="#/management";
                            }
                            else if(val_trim==="student")
                            {
                                window.location="#/student";
                            }
                           else
                            {
                                console.log(val);
                                window.location='/studentDB_ember/login_bla.jsp';
                                //alert("login failed role not detected");
                            }
                        }
                        else{
                            alert("login failed wrong status");
                            window.location='/studentDB_ember/login_bla.jsp';
                           // window.location='/login_bla.jsp';
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
                           window.location='/studentDB_ember/login_bla.jsp';
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

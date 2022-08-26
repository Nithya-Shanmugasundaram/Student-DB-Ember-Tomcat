import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        /*if(sessionStorage.getItem("role")!=null)
        {
            window.location='#/';
        }
        else
        { }
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
                           console.log(val2);
                           if(val2=='management')
                           {
                             window.location='#/management';
                           }
                           else
                           {  
                            alert("invalidd credentials");
                            window.location='#/';
                           }
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
                                window.location='/studentDB_ember/login_bla.jsp';
                                console.log(val);
                                //alert("login failed role not detected");
                            }
                        }
                        else{
                            window.location='/studentDB_ember/login_bla.jsp';
                            alert("login failed wrong status");
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
        mgmt_logout()
        {
          // sessionStorage.removeItem("mgmtsess");
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
        }
    }
});

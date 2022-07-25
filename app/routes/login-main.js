import Route from '@ember/routing/route';

export default Route.extend({

    model()
        {
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
                            if(val_trim==='management')
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
                                alert("login failed role not detected");
                            }
                        }
                        else{
                            alert("login failed wrong status");
                        }
                    }
                }
            }
            catch(e){
                    alert(e);
            }
        }


    /*actions:
    {
        j_security_check()
        {
            var url="j_security_check?j_username="+document.getElementById("id").value + "&j_password=" + document.getElementById("pwd").value;
            var request = new XMLHttpRequest();
            //var val="";
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                            alert("login success j_sec_chk");
                        }
                        else{
                            alert("login failed wrong status");
                        }
                    }
                }
            }
            catch(e){
                    alert(e);
            }
        } }*/
        
   
});

import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        /*if(sessionStorage.getItem("role")!=null)
        {
            window.location='#/';
        }
        else
        { }*/
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
        }
    }
});

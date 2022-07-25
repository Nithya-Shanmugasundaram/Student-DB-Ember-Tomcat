import Route from '@ember/routing/route';

export default Route.extend({
    /*model()
    {
       const sessid = sessionStorage.getItem("mgmtsess");
      // console.log(sessid);
       if(sessid==null)
       {
        window.location="#/management-login";
       }
    },*/
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
                           window.location='#/loginpage';
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

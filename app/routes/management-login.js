import Route from '@ember/routing/route';

export default Route.extend({

    actions:
    {
        verify_mgmt_login(){
            var url="login?mgmt_id="+document.getElementById("mgmt_id").value + "&mgmt_pwd=" + document.getElementById("mgmt_pwd").value;
            var request = new XMLHttpRequest();
            var val="";
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                            val= this.responseText;
                            sessionStorage.setItem("mgmtsess",val);
                            //alert(val);
                            window.location="#/management";
                            //alert("login successful");
                        }
                        else{
                            alert("login failed");
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

import Route from '@ember/routing/route';

export default Route.extend({
   actions:
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
        }
    }
});

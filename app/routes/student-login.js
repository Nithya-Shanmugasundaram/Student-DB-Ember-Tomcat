import Route from '@ember/routing/route';

export default Route.extend({

    actions:
    {
        verify_stu_login()
    {
        var url="login2?stu_id="+document.getElementById("stu_id").value + "&stu_pwd=" + document.getElementById("stu_pwd").value;
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
                            sessionStorage.setItem("stu_sess",val);
                            //alert(val);
                            window.location="#/student";
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
    },
    
    }
    

});

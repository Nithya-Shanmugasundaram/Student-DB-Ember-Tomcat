import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
       const sessid = sessionStorage.getItem("mgmtsess");
       //console.log(sessid);
       if(sessid==null)
       {
        window.location="#/management-login";
       }
    },
    actions:
    {
        updation()
        {
            var url= "update?name="+document.getElementById("name").value + "&roll_no=" + document.getElementById("roll_no").value + "&mailid=" + document.getElementById("mailid").value
            + "&year=" + document.getElementById("year").value + "&dept=" + document.getElementById("dept").value + "&attper=" + document.getElementById("attper").value;
            var request = new XMLHttpRequest();
            //var val="";
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                           alert("Details Updated successfully");
                        }
                        else{
                            alert("Updation failed");
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

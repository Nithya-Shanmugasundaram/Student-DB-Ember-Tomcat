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
        deletion()
        {
            var url= "delete?roll_no=" + document.getElementById("roll_no").value;
            var request = new XMLHttpRequest();
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                           alert("Deleted successfully");
                        }
                        else{
                            alert("Deletion failed");
                        }
                    }
                }
            }
            catch(e)
            {
                alert(e);
            }
        }
    }
});

import Route from '@ember/routing/route';

export default Route.extend({

    model()
    {
        const sess_id = sessionStorage.getItem("stu_sess");
        if(sess_id==null)
        {
            window.location='#/student-login'
        }
    },
    actions:
    {
        stu_logout()
        {
           sessionStorage.removeItem("stu_sess");
           var url="stu_logout";
            var request = new XMLHttpRequest();
            try{
                request.open("POST",url,true);
                request.send();
                request.onreadystatechange = function () {
                    if (this.readyState == 4){
                        if(this.status==200)
                        {
                            window.location='#/student-login';
                           alert("logging out");
                        }
                        else{
                            alert("logoun failed");
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

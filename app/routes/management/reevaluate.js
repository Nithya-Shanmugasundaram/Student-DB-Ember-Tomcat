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
        reevaluation()
        {
            var url = "reevaluation?mark=" + document.getElementById("mark").value +"&sem_no="+ document.getElementById("sem_no").value + "&roll_no=" 
            + document.getElementById("roll_no").value + "&sub=" + document.getElementById("sub").value;
            var request = new XMLHttpRequest();
                //var val="";
                try{
                    request.open("POST",url,true);
                    request.send();
                    request.onreadystatechange = function () {
                        if (this.readyState == 4){
                            if(this.status==200)
                            {
                               alert("Reevaluated successfully");
                            }
                            else{
                                alert("Reevaluation failed");
                            }
                        }
                    }
                }
                catch(e){
                        alert(e);
                }
        },
        table_update()
        {
            var url="reeval_table";
        var request = new XMLHttpRequest();
        try{
            request.open("GET",url,true);
            request.send();
            request.onreadystatechange = function () {
                if (this.readyState == 4){
                    if(this.status==200)
                    {
                         var val= this.responseText;
                         console.log(val);
                         const data = JSON.parse(val);
                         console.log(data);
                         const table_body = document.getElementById("table_body");
                         table_body.innerHTML="";
                         for(const details of data)
                         {
                            const row = document.createElement("tr");
                            row.appendChild(document.createElement('td')
                            ).textContent=details.roll_no;
                            row.appendChild(document.createElement('td')
                            ).textContent=details.sem_no;
                            row.appendChild(document.createElement('td')
                            ).textContent=details.sub;

                            table_body.appendChild(row);
                         }
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

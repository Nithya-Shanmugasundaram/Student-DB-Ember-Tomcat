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
        insert_details_basic()
        {
            var url="insert?name="+document.getElementById("name").value + "&roll_no=" + document.getElementById("roll_no").value + "&mailid=" + document.getElementById("mailid").value
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
                               alert("Details inserted successfully");
                            }
                            else{
                                alert("Insertion failed");
                            }
                        }
                    }
                }
                catch(e){
                        alert(e);
                }
        },
        insert_marks()
        {
            var url="insert_mark?sem_no="+document.getElementById("sem_no").value + "&roll_no=" + document.getElementById("roll_no1").value + "&s1=" + document.getElementById("s1").value
                + "&s2=" + document.getElementById("s2").value + "&s3=" + document.getElementById("s3").value + "&s4=" + document.getElementById("s4").value + "&s5=" + document.getElementById("s5").value
                + "&s6=" + document.getElementById("s6").value;
                var request = new XMLHttpRequest();
                //var val="";
                try{
                    request.open("POST",url,true);
                    request.send();
                    request.onreadystatechange = function () {
                        if (this.readyState == 4){
                            if(this.status==200)
                            {
                               alert("Marks inserted successfully");
                            }
                            else{
                                alert("Insertion failed");
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

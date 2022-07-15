import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
       const sessid = sessionStorage.getItem("mgmtsess");
      // console.log(sessid);
       if(sessid==null)
       {
        window.location="#/management-login";
       }
    },
    actions:
    {
        year_data()
        {
            var url = "year_data?year=" + document.getElementById("year").value + "&year_choice=" + document.getElementById("year_choice").value;
            var request = new XMLHttpRequest();
                try{
                    request.open("POST",url,true);
                    request.send();
                    request.onreadystatechange = function () {
                        if (this.readyState == 4){
                            if(this.status==200)
                            {
                               var val= this.responseText;
                               const year_data = JSON.parse(val);
                               console.log(val);
                               console.log(year_data);
                               const elem=document.getElementById("data");
                               elem.innerHTML="";
                           for(const student of year_data)
                           {
                           const inner_div=document.createElement('div');
                           inner_div.classList.add("inner-div");
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.name;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.dept;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.mailid;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.year;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.roll_no;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.attper;
                           inner_div.appendChild(document.createElement('p')
                           ).textContent=student.cgpa;
   
                           elem.appendChild(inner_div);
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

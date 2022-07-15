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
    }
});

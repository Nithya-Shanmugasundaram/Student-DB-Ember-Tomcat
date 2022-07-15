import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('management-login');
  this.route('student-login');
  this.route('management',{path: '/management'}, function() {
    this.route('read',{path: '/read'}, function() {
      this.route('cgpa');
      this.route('dept');
      this.route('mailid');
      this.route('roll_no');
      this.route('year');
      this.route('name');
    });
    this.route('update');
    this.route('insert');
    this.route('delete');
    this.route('reevaluate');
  });
  this.route('student');
});

export default Router;

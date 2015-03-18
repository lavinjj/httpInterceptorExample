/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Cookoff = require('../api/cookoffs/cookoffs.model');

Cookoff.find({}).remove(function () {
  Cookoff.create({
    name: 'Cedar Fest BBQ',
    info: 'Cedar Fest BBQ',
    eventDate: '4/10/2015',
    webSite: 'http://www.cedarparkchamber.org/',
    contactName: 'Lyndee Matthews',
    contactPhone: '512-260-7800',
    contactEmail: 'info@cedarparkchamber.org',
    kcbsRep: 'KAREN JANE WILLIAMS, RALPH WILLIAMS',
    contestNumber: 5233,
    prizeMoney: 15000,
    active: true
  }, {
    name: 'BBQ Battle Royale at Taste of Dallas',
    info: 'Dallas, TX',
    eventDate: '6/13/2015',
    webSite: 'http://www.arliequeevents.com/',
    contactName: 'Arlie Bragg',
    contactPhone: '615-477-7447',
    contactEmail: 'arlie@arliequeevents.com',
    kcbsRep: 'MIKE LAKE, THERESA LAKE',
    contextNumber: 5778,
    prizeMoney: 0,
    active: true
  }, {
    name: 'City of Bedford Blues & BBQ Festival',
    info: 'Bedford, TX',
    eventDate: '9/4/2015',
    webSite: 'http://www.bedfordbluesfest.com/',
    contactName: 'Wendy Hartnett',
    contactPhone: '817-952-2128',
    contactEmail: 'wendy.hartnett@bedfordtx.gov',
    kcbsRep: 'LYNDA VOTH, KAREN JANE WILLIAMS, RALPH WILLIAMS',
    contextNumber: 5464,
    prizeMoney: 0,
    active: true
  }, {
    name: 'Bynum Schools Best of the Basin BBQ Championship',
    info: 'Midland , TX',
    eventDate: '4/17/2015',
    webSite: 'http://www.bynumschool.org/',
    contactName: 'Tracy Bush',
    contactPhone: '432-520-0075',
    contactEmail: 'tracy@bynumschool.org',
    kcbsRep: 'BOB MCKINNON, TERRI MCKINNON',
    contextNumber: 5225,
    prizeMoney: 0,
    active: true
  })
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

require.config({
    baseUrl: '/',
    paths: {
        'jquery'            : '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
        'underscore'        : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min',
        'backbone'          : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
        'firebase'          : '//cdn.firebase.com/v0/firebase',
        'firebase_login'    : '//cdn.firebase.com/v0/firebase-simple-login',
        'leaflet'           : '//cdn.leafletjs.com/leaflet-0.6.2/leaflet',
        'leaflet_cluster'   : 'script/markercluster/leaflet.markercluster',
        'geosearch'         : 'script/geosearch_js/l.control.geosearch',
        'geosearch_provider': 'script/geosearch_js/l.geosearch.provider.openstreetmap',
    },
   shim: {
      'underscore': {
        exports: '_'
      },

      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },

      'firebase_login': {
        deps: ['firebase']
      },

      'leaflet': {
        deps: ['jquery']
      },

      'leaflet_cluster': {
        deps: ['jquery', 'leaflet']
      },

      'geosearch': {
        deps: ['jquery', 'leaflet']
      },

      'geosearch_provider': {
        deps: ['jquery', 'leaflet', 'geosearch']
      },

   }
});

require([
'jquery',
'underscore',
'backbone',
'view/map_view',
'/assets/application.js',
], function($, _, Backbone, MapView){
    'use strict';
    var mapView = new MapView();
})

import PubnubAdapter from "../models/pubnubAdapter";


export default {
  name: "PubnubAdapter",

  initialize: function(container, application) {
    container.typeInjection('component', 'store', 'store:main');
    application.register('pubnub:adapter', PubnubAdapter, {singleton: true});
    application.inject('controller', 'pubnub', 'pubnub:adapter');
  }
};
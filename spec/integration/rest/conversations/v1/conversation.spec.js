'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Conversation', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://conversations.twilio.com/v1/Conversations';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
              'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
          }
      });

      holodeck.mock(new Response(201, body));

      var promise = client.conversations.v1.conversations.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
              'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'My First Conversation',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
              'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'conversations': [
              {
                  'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Home Repair Visit',
                  'date_created': '2015-12-16T22:18:37Z',
                  'date_updated': '2015-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
                      'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
                      'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'conversations'
          }
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'conversations': [
              {
                  'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Home Repair Visit',
                  'date_created': '2015-12-16T22:18:37Z',
                  'date_updated': '2015-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
                      'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
                      'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'conversations'
          }
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Conversations',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'conversations': [
              {
                  'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Home Repair Visit',
                  'date_created': '2015-12-16T22:18:37Z',
                  'date_updated': '2015-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
                      'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
                      'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'conversations'
          }
      });
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.conversations.v1.conversations.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://conversations.twilio.com/v1/Conversations';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'conversations': [
              {
                  'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Home Repair Visit',
                  'date_created': '2015-12-16T22:18:37Z',
                  'date_updated': '2015-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'participants': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
                      'messages': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages',
                      'webhooks': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'conversations'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

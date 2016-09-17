var watson = require('watson-developer-cloud'),
    Config = require('../config.json');

var conversation = watson.conversation({
  username: Config.watson-conversation-service-username,
  password: Config.watson-conversation-service-password,
  version: 'v1',
  version_date: '2016-07-11'
});

var context = {};

module.exports = function(robot) {
  robot.respond(/[\s\S]*/i, function(res) {
    var str = res.match[0];
    conversation.message({
      workspace_id: Config.watson-conversation-workspace-id,
      input: {
        'text': str
      },
      context: context
    }, function(err, response) {
      if (err)
        console.log('error:' + JSON.stringify(err));
      else {
        if (response && response.output && response.output.text && response.output.text.length > 0) {
          res.send(response.output.text[0]);
        }
      }
    });
  });
}

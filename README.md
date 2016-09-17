# hubot-rocketchat-watson
IBM Watson conversation API powered hubot with rocketchat adapter

# Steps
1. Run Mongo - docker-compose -d mongo
2. Run rocketchat - docker-compose -d rocketchat
3. Add bot user in rocket chat
4. Update ROCKETCHAT_USER, ROCKETCHAT_PASSWORD and BOT_NAME in docker-compose.yml with bot user details
5. Run hubot - docker-compose -d hubot 

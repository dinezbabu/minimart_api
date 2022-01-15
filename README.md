# minimart_api
cmd: npm init
cmd:  npm install express mongoose express-unless bcryptjs jsonwebtoken mongoose-unique-validator --save
cmd: nodemon js

Mongo/DB Issue: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
Refernce : https://www.youtube.com/watch?v=ZEg03f1o_vQ&list=PL7zgwanvi8_N5RanlZ4XnFeQp9ar2Jtcd&index=2
# If you still have the old mongodb installed from homebrew-core
brew services stop mongodb-community@5.0
brew uninstall homebrew/core/mongodb

# Use the migrated distribution from custom tap
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
brew services restart mongodb-community@5.0

#kill Mongo DB instance
sudo lsof -i :27017
kill -9 <PID>

Mongo Logs:
tail $(brew --prefix)/var/log/mongodb/mongo.log

service to run background
brew services start mongodb/brew/mongodb-community
or
mongod --config /usr/local/etc/mongod.conf


git Key: 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
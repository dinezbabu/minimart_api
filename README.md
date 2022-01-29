# minimart_api
cmd: npm init
cmd:  npm install express mongoose express-unless bcryptjs jsonwebtoken mongoose-unique-validator --save
cmd: nodemon js --> To run application

#Steps to make API Work
sudo brew services restart mongodb-community@5.0
cmd: nodemon js

#Swagger
http://localhost:4000/api-docs/


#Mongo DB require Sudo to run the brew service

Mongo/DB Issue: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
Refernce login : https://www.youtube.com/watch?v=ZEg03f1o_vQ&list=PL7zgwanvi8_N5RanlZ4XnFeQp9ar2Jtcd&index=2
Reference Product/Categories: https://www.youtube.com/watch?v=dEa9njREtPQ&list=WL&index=7&t=2s
# If you still have the old mongodb installed from homebrew-core
brew services stop mongodb-community@5.0
brew uninstall homebrew/core/mongodb

# Use the migrated distribution from custom tap
sudo brew tap mongodb/brew
sudo brew install mongodb-community@5.0
sudo brew services start mongodb-community@5.0
sudo brew services restart mongodb-community@5.0

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


Command to kill Mongo
lsof -nP -iTCP -sTCP:LISTEN | grep 27017 (or)  netstat -vanp tcp | grep 27017
kill -9 <pid>


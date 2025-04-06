#!/bin/bash

echo "Starting backend..."
if [ "$INSTALL" == true ]; then
  echo "Instaling dependencies..."
  npm install
fi
docker-compose up --build -d

# Wait until MongoDB is available
until docker exec mongo mongosh --quiet --username mongo --password mongo --eval 'db.runCommand({ ping: 1 })' &> /dev/null; do
  echo "Waiting for the MongoDB database to be available..."
  sleep 2
done

echo "All services are up!"
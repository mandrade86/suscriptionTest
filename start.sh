#!/bin/bash

# Function to check if Docker Compose is installed
check_docker_compose() {
  if ! command -v docker-compose &> /dev/null
  then
    echo "Docker Compose not found, please install..."
  else
    echo "Docker Compose is already installed."
  fi
}

INSTALL=false

# Check if the --install flag was passed
for arg in "$@"; do
  if [ "$arg" == "--install" ]; then
    INSTALL=true
    break
  fi
done

echo "Starting backend..."
cd ./backend || exit

# Run the custom Docker start script
chmod +x .start-docker.sh
./start-docker.sh

echo "Waiting for backend to start..."
sleep 10  # Give some time for the backend to be up

echo "Starting frontend..."
cd ../frontend || exit

# Run yarn install if the --install flag was passed
if [ "$INSTALL" == true ]; then
  echo "Installing dependencies..."
  yarn install
fi

yarn dev

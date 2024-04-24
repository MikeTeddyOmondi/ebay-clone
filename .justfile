# Default
default:
  just --list

# Run dev mode
run-dev:
  bun dev  

# Build Docker Image
build-image:
  docker build -t ranckosolutionsinc/soko247:v1.0.0 . 

# Docker compose 
compose:
  docker compose up -d

# Docker compose down
compose-down:
  docker compose down
  
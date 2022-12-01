# Envoy

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name proxy-envoy --network network-webapp -p 8085:10000 envoyproxy/envoy-alpine:v1.21-latest
```

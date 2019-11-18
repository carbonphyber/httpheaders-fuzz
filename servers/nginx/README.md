# NginX

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name proxy-nginx --network network-webapp -p 8081:80 -v $(pwd)/config/nginx.conf:/etc/nginx/nginx.conf:ro nginx:1.17-alpine
```

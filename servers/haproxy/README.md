# HAProxy

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name proxy-haproxy --network network-webapp -p 8082:80 -v $(pwd)/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro haproxy:2.0-alpine
```

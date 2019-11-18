# NginX

```
docker run -dit --rm --name proxy-nginx --network network-webapp -p 8081:80 -v $(pwd)/config/nginx.conf:/etc/nginx/nginx.conf:ro nginx:1.17-alpine
```

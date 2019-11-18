# HAProxy

```
docker build --tag web-backend:latest .
docker run -it --rm --name web-backend --network network-webapp -p 80:80 web-backend:latest
```

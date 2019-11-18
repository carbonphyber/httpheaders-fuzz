FROM httpd:2.4-alpine

RUN sed -i \
        -e 's/^#\(Include .*httpd-vhosts.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy\)/\1/' \
        -e 's/^#\(LoadModule .*mod_slotmem_shm\)/\1/' \
        -e 's/^#\(LoadModule .*mod_watchdog\)/\1/' \
        -e 's/^#\(ServerName \)\(www.example.com\)\(:80\)/\1frontend-httpd\3/' \
        conf/httpd.conf

COPY config/httpd-vhosts.conf conf/extra/

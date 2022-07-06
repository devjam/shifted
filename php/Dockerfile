FROM php:7.3-apache
COPY ./php.ini /usr/local/etc/php/

RUN apt-get update \
  && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev vim \
  && docker-php-ext-install mbstring gd iconv

RUN if [ $(uname -m) = "aarch64" ]; then \
  curl -sSLO https://github.com/evertiro/mhsendmail/releases/download/v0.2.0-M1/mhsendmail_linux_arm64 \
    && chmod +x mhsendmail_linux_arm64 \
    && mv mhsendmail_linux_arm64 /usr/local/bin/mhsendmail \
    && echo 'sendmail_path = "/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025"' > /usr/local/etc/php/conf.d/sendmail.ini;\
  else \
  curl -sSLO https://github.com/evertiro/mhsendmail/releases/download/v0.2.0-M1/mhsendmail_linux_arm64 \
    && chmod +x mhsendmail_linux_arm64 \
    && mv mhsendmail_linux_arm64 /usr/local/bin/mhsendmail \
    && echo 'sendmail_path = "/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025"' > /usr/local/etc/php/conf.d/sendmail.ini; fi
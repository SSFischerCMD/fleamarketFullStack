FROM php:8.3-fpm

# Install dependencies and configure extensions
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libpq-dev \
    libonig-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pgsql \
    && docker-php-ext-install pdo pdo_pgsql \
    && docker-php-ext-install mysqli pdo_mysql

# Set the working directory
WORKDIR /var/www/html
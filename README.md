# Setup this project

```
git clone https://github.com/Ruslan-Aliyev/laravel_notes.git
cd laravel_notes
cp .env.example .env
```
Import `laravel_notes.sql` into DB
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_notes
DB_USERNAME=
DB_PASSWORD=
```

```
composer install
php artisan key:generate
```

## Environment

node -v
v10.21.0

npm -v
6.14.4

# Good tutorials on new (2021) Laravel stuff

- https://www.youtube.com/playlist?list=PLe30vg_FG4OR3b24WlxeTWsj7Z2wOtYrH
- https://www.youtube.com/playlist?list=PLpzy7FIRqpGCl26FcHazZmIUwT7zFJu7U

## Homestead

https://github.com/atabegruslan/Others/blob/master/Virtual/laravel_homestead.md

## Install Laravel

```
composer global require laravel/installer
laravel new laravel_notes
```
or
```
composer create-project --prefer-dist laravel/laravel laravel_notes
php artisan key:generate
```

## Admin Backside Panel

- https://reposhub.com/php/web-frameworks/the-control-group-voyager.html
- https://github.com/the-control-group/voyager

```
composer require tcg/voyager
# Update .env database connection and APP_URL
php artisan voyager:install --with-dummy
http://localhost/laravel_notes/public/admin : admin@admin.com/password
```

## View Overriding

- THE tutorial: https://www.youtube.com/watch?v=BntEU1Q5ga8
- https://voyager-docs.devdojo.com/
	- https://voyager-docs.devdojo.com/customization/overriding-files
	- EG: For `http://localhost/laravel_notes/public/admin/posts`, override `vendor/tcg/voyager/resources/views/bread/browse.blade.php` with `resources/views/vendor/voyager/posts/browse.blade.php`

## Making Service

- https://github.com/artogrig/laravel-make-service
- https://laracasts.com/discuss/channels/laravel/howwhere-do-i-create-service-classes

## Unit Test

### Plain PHP

- https://github.com/Ruslan-Aliyev/PHPUnit

### Laravel

- https://www.youtube.com/watch?v=DRhhfy2sG1E
- https://www.youtube.com/playlist?list=PL8p2I9GklV47wJibNio45rH1qOHguwq5Z

`php artisan make:test TestTest --unit`

`vendor/bin/phpunit`

## GraphQL

- https://www.youtube.com/playlist?list=PLEhEHUEU3x5qsA5JnRzhgOghrH9Vqz4cg
- https://www.youtube.com/watch?v=4z3EMCc4bP4

### Lighthouse at back

https://www.toptal.com/graphql/laravel-graphql-server-tutorial

```
composer require nuwave/lighthouse
```

Becareful! and note that Laravel 8 goes well with Lighthouse v4.17.0

https://github.com/nuwave/lighthouse/releases

```
php artisan vendor:publish
```

Select the lighthouse one to publish at prompt.

Make sure this is pointing to the right place: https://github.com/Ruslan-Aliyev/laravel_notes/blob/master/config/lighthouse.php#L73

Do like this: https://github.com/Ruslan-Aliyev/laravel_notes/blob/master/graphql/schema.graphql

Check http://localhost/laravel_notes/public/graphql POSTMan like so: https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/

![](https://raw.githubusercontent.com/Ruslan-Aliyev/laravel_notes/master/Illustrations/lighthouse.png)

#### More notes

- https://auth0.com/blog/developing-and-securing-graphql-apis-with-laravel/
- https://github.com/folkloreinc/laravel-graphql/issues/270
- https://stackoverflow.com/questions/58369552/so-composer-require-rebing-graphql-laravel-fails
- https://miguelpiedrafita.com/laravel-graphql-gotchas
- https://amp.reddit.com/r/laravel/comments/bharfj/using_graphql_with_laravel/
- https://www.freecodecamp.org/news/graphql-with-laravel-and-vue-js/
  - https://www.youtube.com/watch?v=4z3EMCc4bP4
- https://medium.com/@sadnub/migrating-to-graphql-on-laravel-with-lighthouse-42bd96d9d73
- https://github.com/nuwave/lighthouse/issues/77
- https://www.swoole.co.uk/article/Build-a-GraphQL-API-on-top-of-Swoole
- https://siler.leocavalcante.dev/

### Apollo in front

```
npm install
npm install vue-apollo apollo-boost graphql
```

Do like this https://github.com/Ruslan-Aliyev/laravel_notes/blob/master/resources/js/app.js

Add this https://github.com/Ruslan-Aliyev/laravel_notes/blob/master/resources/views/welcome.blade.php#L24-L27

And do like this https://github.com/Ruslan-Aliyev/laravel_notes/blob/master/resources/js/components/ExampleComponent.vue

`npm run dev`

See http://localhost/laravel_notes/public/

#### More notes

- https://reactgo.com/vue-apollo-tutorial/ <sub>good</sub>
- https://github.com/sadhakbj/Laravel-Vue-Graphql
- https://vue-apollo.netlify.app/guide/#sponsors
- https://medium.com/@brandon.shar/graphql-laravel-and-vue-part-2-frontend-ef5624312956
- https://www.youtube.com/watch?v=hvjW-MQEwIM
- https://www.digitalocean.com/community/tutorials/how-to-build-a-blog-with-vue-graphql-and-apollo-client

## SMS SignIn

- https://codezen.io/how-to-send-sms-messages-in-laravel/
- https://stackoverflow.com/questions/48883060/laravel-register-and-log-in-via-phone-number-and-sms-confirmation

## Multi-Lingual

- https://www.youtube.com/watch?v=KqzGKg8IxE4
	- https://www.youtube.com/watch?v=CFGjn3yKMNc

## Web Scraping

### Plain PHP

https://youtu.be/fABDulzEH1c

### Laravel

https://youtube.com/playlist?list=PLdrI5L8kS2YJRWncyGzrlb8rhlDylxmmG

## Queues

https://github.com/Ruslan-Aliyev/async_php#queue

## Logging

### PHP

3 ways:
- Inline (stdout)
- Log files
- Frameworks', 3rd party log libraries

In `php.ini`
- Turn on `log_errors`
- Turn off `display_errors`, so that errors would to into log files instead of appearing inline on screen
- Set `error_log` to 
	- either `syslog` - typically on Linux: `/var/log/syslog`
	- or a _specific file path_ - default on Linux: `/var/log/{server}/error.log`

After editing the `php.ini`, you can use `<?php php_info(); ?>` and check `error_log` to see the path of the log file.

Other useful log functions in PHP:
- `error_reporting(E_ALL)` or whatever other level.
- `error_log(msg, type, dest, ...)` to make a error.

Refs:
- https://rollbar.com/guides/where-are-php-errors-logged/
- https://www.loggly.com/ultimate-guide/php-logging-basics/  

- https://www.youtube.com/watch?v=5VtU-HK9PCw
- https://www.youtube.com/watch?v=4uMDw5q8Scs

### Monolog

Laravel uses Monolog under the hood

- https://silex.symfony.com/doc/2.0/providers/monolog.html
- https://www.youtube.com/watch?v=cePgCwNoGF8

### Laravel

Default log's path: `storage/logs/laravel.log`

In `.env`, you can see `LOG_CHANNEL=stack`

Then you can see `config/logging.php`

With the default "stack" channel, you can specify multiple channels, eg:

```php
'channels' => [
    'stack' => [
        'driver' => 'stack',
        'channels' => ['single', 'custom'],
    ],

    'single' => [
        'driver' => 'single',
        'path' => storage_path('logs/laravel.log'), // You can see that the default log path is indeed at 'storage/logs/laravel.log'
        ...
    ],

    'custom' => [ // You can specify your custom logs
        'driver' => 'single',
        'path' => storage_path('logs/custom.log'),
        ...
    ],
],
```

Then just test if it works by making a route
```php
Route::get('/log', function () {
    Log::channel('custom')->info('msg', ['data' => 'value']);
});
```

- https://laravel.com/docs/8.x/logging
- https://www.youtube.com/watch?v=GOmiWKpwFSo
- https://stackify.com/laravel-logging-tutorial/  

- https://www.youtube.com/watch?v=XWFXikdTFcw

## JWT

- Intro: https://github.com/Ruslan-Aliyev/auth#jwt
- https://www.youtube.com/watch?v=VtAxYez4ZdQ

- https://www.youtube.com/watch?v=jF9wdF0sViI
- https://www.youtube.com/watch?v=6eX9Pj-GhZs
- https://www.youtube.com/watch?v=jIzPuM76-nI

## WebSockets

- https://www.youtube.com/watch?v=rNOGLLPXzwc
- https://www.youtube.com/playlist?list=PLwAKR305CRO9rlj-U9oOi4m2sQaWN6XA8

- https://www.youtube.com/watch?v=wknGvg0sTAc
- https://www.youtube.com/watch?v=2PTgJwxf6UI&list=PLe30vg_FG4OR3b24WlxeTWsj7Z2wOtYrH&index=17
- https://www.youtube.com/playlist?list=PLwAKR305CRO9rlj-U9oOi4m2sQaWN6XA8

### Pusher

- https://www.youtube.com/watch?v=l44IF9fBNOs
- https://www.youtube.com/watch?v=CkRGJC0ytdU

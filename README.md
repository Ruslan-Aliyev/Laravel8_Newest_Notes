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
- https://www.youtube.com/playlist?list=PL36CGZHZJqsXntCJceGN8J2B9wFZD7GFe
- https://www.youtube.com/playlist?list=PLvv7zSkflFHK-31jurIdTca-LXpu-QGKV
- https://www.youtube.com/c/drehimself/playlists
    - https://www.youtube.com/watch?v=9OKbmMqsREc&list=RDCMUCtb40EQj2inp8zuaQlLx3iQ&start_radio=1

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

### Pest

A layer on top of PHPUnit. It can shorten the code.

https://www.youtube.com/watch?v=jxHVaz3iOiU

Related: https://laravel-news.com/behavioral-driven-development

## Client Side Vallidation

- https://jqueryvalidation.org/
- https://www.youtube.com/watch?v=yfJP8CQJNYE

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
- https://www.youtube.com/playlist?list=PLcfD4HARQRF_PPy_0TN1NERYVK0iF5Y0Q
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

https://github.com/Ruslan-Aliyev/web_crawling/tree/master/Web_Scraping

### Laravel

- https://youtube.com/playlist?list=PLdrI5L8kS2YJRWncyGzrlb8rhlDylxmmG
- https://www.youtube.com/watch?v=P0EZ-__6X04
- https://github.com/FriendsOfPhp/Goutte#usage

1. `composer require fabpot/goutte`
2. `php artisan make:command ScrapeCommand`
3. See `app/Console/Commands/ScrapeCommand.php`
4. `php artisan scraper:start`

## Queues

https://github.com/Ruslan-Aliyev/async_php#queue

## Logging

Laravel uses Monolog under the hood.  
More about PHP logs and Monolog, see: https://github.com/Ruslan-Aliyev/log

1. Default log's path: `storage/logs/laravel.log`

2. In `.env`, you can see `LOG_CHANNEL=stack`

3. Then you can see `config/logging.php`

4. With the default "stack" channel, you can specify multiple channels, eg:

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

5. Then just test if it works by making a route
```php
Route::get('/log', function () {
    Log::channel('custom')->info('msg', ['data' => 'value']);
});
```

- https://laravel.com/docs/8.x/logging
- https://www.youtube.com/watch?v=GOmiWKpwFSo
- https://stackify.com/laravel-logging-tutorial/  

- https://www.youtube.com/watch?v=XWFXikdTFcw

Debugging / Monitoring

- https://github.com/barryvdh/laravel-debugbar

## JWT

- Intro: https://github.com/atabegruslan/Others/blob/master/Security/auth.md#jwt
    - https://jwt-auth.readthedocs.io/en/develop/laravel-installation/
- https://www.youtube.com/watch?v=VtAxYez4ZdQ
- https://adevait.com/laravel/implementing-jwt-authentication-in-laravel

### Others

- https://www.youtube.com/watch?v=jF9wdF0sViI
- https://www.youtube.com/watch?v=6eX9Pj-GhZs
- https://www.youtube.com/watch?v=jIzPuM76-nI

## WebSockets

### All done locally

1. Setup: `composer require beyondcode/laravel-websockets`
2. `php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="migrations"
`
3. `php artisan migrate`
4. `php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="config"`
5. Uncomment `App\Providers\BroadcastServiceProvider::class,` in `config/app.php` 'providers' array.
6. Change `config/broadcasting.php` pusher's options to local
```php
'options' => [
    'cluster' => env('PUSHER_APP_CLUSTER'),
    'encrypted' => true,
    'host' => '127.0.0.1',
    'port' => 6001,
    'scheme' => 'http'
],
```
7. `composer require pusher/pusher-php-server "~3.0"`
8. In `.env`
```
BROADCAST_DRIVER=pusher
...
PUSHER_APP_ID=local
PUSHER_APP_KEY=local
PUSHER_APP_SECRET=local
```
9. `php artisan websockets:serve`

If you get error saying that port 6001 is already used, then `ps -ef | grep php` and kill the `php artisan serve` process.  
https://stackoverflow.com/questions/27900174/artisan-error-failed-to-listen-on-localhost8000

10. Visit http://localhost/laravel_notes/public/laravel-websockets , press "Connect"
11. Test: `php artisan make:event WSTest`
12. See `app/Events/WSTest.php`
13. Make a route to test
```php
Route::get('/testws', function () {
    broadcast(new WSTest());
});
```
14. Visit http://localhost/laravel_notes/public/testws
15. See new entry in http://localhost/laravel_notes/public/laravel-websockets
16. VueJS: `npm install laravel-echo pusher-js`
17. In `resources/js/bootstrap.js`
```js
import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: process.env.MIX_PUSHER_APP_WS_SERVER,
    wsPort: process.env.MIX_PUSHER_APP_WS_PORT,
    forceTLS: false,
    disableStats: true
});
```
18. In `resources/js/components/ExampleComponent.vue`
```js
mounted() {
    window.Echo.channel('channel')
        .listen('WSTest', (e) => {
            console.log(e);
        });
},
```
19. `npm run prod`, visit http://localhost/laravel_notes/public/ and open its "Developer tools > Console", visit http://localhost/laravel_notes/public/testws , you will see the results in http://localhost/laravel_notes/public/ 's Console

- https://www.youtube.com/watch?v=rNOGLLPXzwc
    - https://beyondco.de/docs/laravel-websockets/getting-started/installation
- https://www.youtube.com/playlist?list=PLwAKR305CRO9rlj-U9oOi4m2sQaWN6XA8

### With Pusher

1. Sign up at https://dashboard.pusher.com/
2. Copy https://dashboard.pusher.com/apps/{app_id}/keys to `.env` 
```
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=
```
3. Change `config/broadcasting.php` pusher's options
```php
'options' => [
    'cluster' => env('PUSHER_APP_CLUSTER'),
    'encrypted' => true
],
```
4. Visit http://localhost/laravel_notes/public/testws and see new log on https://dashboard.pusher.com/apps/{app_id}/console
5. Change `resources/js/bootstrap.js`
```js
import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true
});
```
6. `npm run prod`, visit http://localhost/laravel_notes/public/testws , then see http://localhost/laravel_notes/public/ and open its "Developer tools > Console"

- https://www.youtube.com/watch?v=2PTgJwxf6UI&list=PLe30vg_FG4OR3b24WlxeTWsj7Z2wOtYrH&index=17

### Making a proper chat app

- https://www.youtube.com/watch?v=CkRGJC0ytdU

## Pipeline

- https://hafiqiqmal93.medium.com/laravel-eloquent-query-sfilter-using-pipeline-7c6f2673d5da

In controller
```php
namespace App\Http\Controllers;

use Illuminate\Pipeline\Pipeline;
use App\Models\Post;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $select   = ['title', 'contents'];
        $filters  = ['title' => 'Wanted Title', 'another_filter_name' => 'another_filter_value'];
        $paginate = true;
        $perPage  = 10;

        /** @var \Illuminate\Database\Query\Builder $query */
        $query = app(Pipeline::class)
            ->send( Post::with('comment') /* Of type Illuminate\Database\Eloquent\Builder */ )
            ->through( Post::PIPES )
            ->thenReturn();

        if (count($select)) 
        {
            $query->select(DB::raw(join(',', $select)));
        }
        if (!empty($filters))
        {
            $query->where($filters);
        }

        $data = null;

        if ($paginate) 
        {
            $data = $query->paginate($perPage);
        }
        else
        {
            $data = $query->get();
        }

        $entries           = $data->items();
        $numberOfPages     = ceil($data->total() / $data->perPage());
        $currentPageNumber = $data->currentPage();
    }
}
```

In model
```php
namespace App\Models;

use App\Models\Comment;
use App\Filters\Title;
use App\Filters\Contents;

class Post extends Model
{
    const PIPES = [
        Title::class,
        Contents::class,
    ];

    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
```

Filters:
```php
namespace App\Filters;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class Filter
{
    protected $request;

    function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Handle the filter and return the builder.
     *
     * @param Builder $builder
     * @param Closure $next
     * @return void
     */
    public function handle(Builder $builder, Closure $next)
    {
        if (
            !$this->request->has($this->filterName()) 
            || 
            $this->request->input($this->filterName(), '') === ''
        ) 
        {
            return $next($builder);
        }

        return $this->applyFilters($next($builder));
    }

    /**
     * apply Filters
     *
     * @param Builder $builder
     * @return void
     */
    protected abstract function applyFilters(Builder $builder): Builder;

    protected function filterName()
    {
        return Str::snake(class_basename($this));
    }
}
```

```php
namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;

class Title extends Filter
{
    protected function applyFilters(Builder $builder): Builder
    {
        return $builder->where('title', 'ILIKE', '%' . $this->request->input($this->filterName()) . '%');
        // ILIKE only works in PostgreSql
    }
}
```
## Get Server's info from within Laravel

In Controller
```php
public function showInfo(Request $request)
{
    dd($request);
}
```
The `server` sub-section shows the equivalent info of `$_SERVER`

In Template, you can render
```
@php
    phpinfo();
@endphp
```

Find where the PHP executable is located
```php
public function findPhpExec()
{
    $phpFinder = new \Symfony\Component\Process\PhpExecutableFinder;

    if (!$phpPath = $phpFinder->find()) 
    {
        throw new \Exception('The php executable could not be found, add it to your PATH environment variable and try again');
    }

    return $phpPath;
}
```

## PgSql

Have these in `.env`
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
POSTGRESQL_ADDON_DB=xxx
POSTGRESQL_ADDON_USER=postgres
POSTGRESQL_ADDON_PASSWORD=
```

Enable `extension=pdo_pgsql` in `php.ini`

## API returning file downloads

Download PDF on server: 
```php
return response()->download('/absolute/path/to/file.pdf', 'filename.pdf', ['Content-Type: application/pdf']);
```
- Multiple: https://www.itsolutionstuff.com/post/laravel-5-multiple-files-download-with-response-exampleexample.html
- Also note: https://stackoverflow.com/questions/29289177/binaryfileresponse-in-laravel-undefined

Download PDF directly from base64:
```php
return response()->make( base64_decode('base64_binary_string_blah_blah') , 200, [
    'Content-Type' => 'application/pdf',
    'Content-Disposition' => 'inline; filename="filename.pdf"'
]);
```
https://www.codegrepper.com/code-examples/php/response%28%29-%3Emake+laravel+pdf

Download CSV directly from stream: https://www.laravelcode.com/post/how-to-export-csv-file-in-laravel-example

## Zalo Integration

https://www.youtube.com/watch?v=rXI03h4jbBg

## Nested controllers

- GOOD: https://www.youtube.com/watch?v=xqNip5PYBv8
- GOOD: https://laraveldaily.com/post/nested-resource-controllers-and-routes-laravel-crud-example
- Relevant: https://laracasts.com/discuss/channels/laravel/nested-resources-controllers-structure
- Relevant: https://laracasts.com/discuss/channels/laravel/artisan-nested-resource-controllers-creation

## Nested Models

- GOOD: https://www.youtube.com/watch?v=5s-_SnVl-1g
    - https://github.com/staudenmeir/eloquent-has-many-deep

## Accessors / Mutators

Eg: Get timestamps in a formatted way, get name with first letter capitalized, get a currency number in the currency format ...

https://laravel.com/docs/9.x/eloquent-mutators

![image](https://user-images.githubusercontent.com/6761422/200237222-249b4b6f-3ed9-4a9e-8a59-c0eb9ce7f240.png)

https://github.com/academico-sis/academico/blob/pro/app/Traits/PriceTrait.php#L7

## Package Development

- https://laravel.com/docs/8.x/packages , https://www.youtube.com/watch?v=gqYIxv7PXxQ
- https://wisdmlabs.com/blog/create-package-laravel/
- `artisan vendor:publish`: https://stillat.com/blog/2016/12/07/laravel-artisan-vendor-command-the-vendorpublish-command
- Override package views: https://stackoverflow.com/questions/57160594/is-it-possible-to-override-a-laravel-package-view-from-another-package

<?php

namespace Buxt\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Pagination\Paginator;

class BXServiceProvider extends ServiceProvider {
    protected array $directives = [
        \Buxt\Directives\Acf::class,
        \Buxt\Directives\Helpers::class,
        \Buxt\Directives\WordPress::class,
    ];
    public function register() {
		$this->app->singleton(\Buxt\Pagination\Pagi::class);
		$this->app->bind('navi', fn () => \Buxt\Navigation\Navi::make());
		$this->app->alias(\Buxt\Pagination\Pagi::class, 'pagi');
        Paginator::viewFactoryResolver(function () {
            return $this->app->make('view');
        });
        View::composer('*', \Buxt\Action\BX_Compose::class);
        autoclass('Buxt');
    }

    public function boot(){
        collect($this->directives)
            ->filter(fn ($directive) => is_subclass_of($directive, \Buxt\Directives\Directives::class))
            ->each(fn ($directive) => $directive::make()->register());
        $this->registerBladeDirectives();
    }

    protected function registerBladeDirectives(): void{
        Blade::directive('lang', fn($expression) =>
            "<?php bxelang({$expression}); ?>"
        );
    }
}

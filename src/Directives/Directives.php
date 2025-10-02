<?php

namespace Buxt\Directives;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Buxt\Contracts\Directives as DirectivesContract;

abstract class Directives implements DirectivesContract {
    protected bool $registered = false;
    protected array $conflicts = [];
    public static function make(): self
    {
        return new static;
    }

    public function register(): void{
        if ($this->registered) {
            return;
        }
        $conflicts = collect($this->conflicts)
            ->filter(fn ($directives, $class) => class_exists($class))
            ->flatMap(fn ($directives) => (array) $directives);
        collect($this->directives())
            ->except($conflicts)
            ->each(fn ($callback, $directive) => Blade::directive($directive, $callback));
        $this->registered = true;
    }

    public function parse(string $expression, int $limit = PHP_INT_MAX, string $delimiter = '__comma__'): Collection {
        $expression = preg_replace_callback(
            '/\'(.*?)\'|"(.*?)"/',
            fn ($matches) => str_replace(',', $delimiter, $matches[0]),
            $expression
        );
    
        return Collection::make(explode(',', $expression, $limit))->map(function ($item) use ($delimiter) {
                $item = Str::of($item)->replace($delimiter, ',')->trim()->toString();
                if (Str::startsWith($item, '$')) {
                    return $item;
                }
                return !is_numeric($item) ? $item : (int) $item;
            });
    }

    public function shouldParse(?string $expression = ''): bool {
        return Str::contains($expression, ',');
    }

    public function isToken(?string $expression = ''): bool {
        $expression = $this->strip($expression);

        return ! empty($expression) && (is_numeric($expression) || Str::startsWith($expression, ['$', 'get_']));
    }

    public function strip(?string $expression = '', array $characters = ["'", '"']): string
    {
        return str_replace($characters, '', $expression ?? '');
    }

    public function wrap($value)
    {
        $value = Str::start($value, "'");
        $value = Str::finish($value, "'");

        return $value;
    }

    public function unwrap(?string $value = '', string $delimiter = "'"): string
    {
        if (Str::startsWith($value, $delimiter)) {
            $value = Str::replaceFirst($delimiter, '', $value);
        }

        if (Str::endsWith($value, $delimiter)) {
            $value = Str::replaceLast($delimiter, '', $value);
        }

        return $value;
    }

    public function toString(string|array|null $expression = '', bool $single = false): string
    {
        if (! is_array($expression)) {
            return $this->wrap($expression);
        }

        $keys = '';

        foreach ($expression as $key => $value) {
            $keys .= $single ?
                $this->wrap($value).',' :
                $this->wrap($key).' => '.$this->wrap($value).', ';
        }

        $keys = trim(Str::replaceLast(',', '', $keys));

        if (! $single) {
            $keys = Str::start($keys, '[');
            $keys = Str::finish($keys, ']');
        }

        return $keys;
    }

    public function isArray(?string $expression = ''): bool
    {
        $expression = $this->unwrap($expression);

        return Str::startsWith($expression, '[') && Str::endsWith($expression, ']');
    }
}

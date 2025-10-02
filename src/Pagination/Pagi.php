<?php
namespace Buxt\Pagination;

use Illuminate\Support\Arr;
use Buxt\Pagination\LengthPaginator;

class Pagi {
    /**
     * The current WP_Query.
     *
     * @var \WP_Query
     */
    protected static $query;

    /**
     * Collection of pagination items.
     *
     * @var \Illuminate\Support\Collection
     */
    protected static $items;

    /**
     * The current page.
     *
     * @var int
     */
    protected static $currentPage = 1;

    /**
     * Items shown per page.
     *
     * @var int
     */
    protected static $perPage = 1;

    /**
     * Prepare the WordPress pagination.
     *
     * @return void
     */
    protected static function prepare()
    {
        if (! isset(self::$query)) {
            self::$query = collect(
                Arr::get($GLOBALS, 'wp_query')->query_vars ?? []
            )->filter();

            self::$items = collect()->range(1, Arr::get($GLOBALS, 'wp_query')->found_posts);
        }

        if (self::$query->isEmpty()) {
            return;
        }

        self::$perPage = self::$query->get('posts_per_page', 1);
        self::$currentPage = max(1, absint(get_query_var('paged')));
    }

    public static function build()
    {
        self::prepare();

        return new LengthPaginator(
            self::$items,
            self::$items->count(),
            self::$perPage,
            self::$currentPage
        );
    }

    public static function setQuery($query)
    {
        self::$items = collect()->range(1, $query->found_posts);
        self::$query = collect(
            $query->query_vars ?? []
        )->filter();
    }
}
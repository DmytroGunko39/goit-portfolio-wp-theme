<?php
add_action('wp_enqueue_scripts', 'portfolio_scripts');
function portfolio_scripts()
{
    // Styles
    wp_enqueue_style(
        'portfolio-style',
        get_template_directory_uri() . '/assets/scss/app.min.css',
        array(),
        _VERSION
    );

    //Scripts
    wp_enqueue_script('jquery');
    wp_enqueue_script(
        'portfolio-script',
        get_template_directory_uri() . '/assets/js/app.min.js',
        array(),
        _VERSION,
        true
    );
}

add_action('after_setup_theme', 'portfolio_editor_styles');
function portfolio_editor_styles()
{
    add_theme_support('editor-styles');
    add_editor_style('assets/scss/app.min.css');
}

add_action('after_setup_theme', 'portfolio_theme_setup');
function portfolio_theme_setup()
{
    // Enables Featured image for posts and custom post types
    add_theme_support('post-thumbnails');

    // Let WordPress output the <title> tag in <head>
    add_theme_support('title-tag');
}

add_action('wp_head', 'portfolio_preload_fonts', 1);
function portfolio_preload_fonts()
{
    $fonts = array(
        'poppins-v24-latin-400.woff2',
        'poppins-v24-latin-800.woff2',
    );

    foreach ($fonts as $font) {
        printf(
            '<link rel="preload" as="font" type="font/woff2" href="%s/assets/fonts/%s" crossorigin>' . "\n",
            get_template_directory_uri(),
            $font
        );
    }
}

add_action('wp_head', 'portfolio_meta_description', 1);
function portfolio_meta_description()
{
    $description = '';

    if (is_front_page()) {
        $front_page_id = (int) get_option('page_on_front');
        $seo_description = $front_page_id ? get_field('seo_description', $front_page_id) : '';

        $description = $seo_description
            ? $seo_description
            : 'Hi, I\'m Jimmy, a UI/UX Designer, creating bold and brave Interface design for companies all across the world. I specialize in creating user-friendly and visually appealing digital experiences that leave a lasting impression.';
    } elseif (is_singular()) {
        $post = get_queried_object();

        if ($post instanceof WP_Post && has_excerpt($post)) {
            $description = wp_strip_all_tags(strip_shortcodes($post->post_excerpt));
        } elseif ($post instanceof WP_Post) {
            $description = portfolio_trim_description(
                wp_strip_all_tags(strip_shortcodes($post->post_content))
            );
        }
    } elseif (is_post_type_archive('project')) {
        $description = 'UI/UX design projects by Jimmy: bold and brave interface design for companies around the world.';
    }

    $description = trim($description);

    if ($description === '') {
        return;
    }

    printf('<meta name="description" content="%s">' . "\n", esc_attr($description));
}

function portfolio_trim_description($text, $length = 155)
{
    $text = trim(preg_replace('/\s+/', ' ', $text));

    if (mb_strlen($text) <= $length) {
        return $text;
    }

    $trimmed = mb_substr($text, 0, $length);
    $last_space = mb_strrpos($trimmed, ' ');

    if ($last_space !== false) {
        $trimmed = mb_substr($trimmed, 0, $last_space);
    }

    return $trimmed . '…';
}

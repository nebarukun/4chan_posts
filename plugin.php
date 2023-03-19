<?php

/*
   Plugin Name:  4chan - Posts
   Plugin URI:   https://github.com/nebarukun/4chan_posts
   Description:  This WordPress plugin allows you to easily add 4chan posts to your page via the blocks. It uses the 4chan API to fetch the posts directly from 4chan.
   Version:      1.0.0
   Author:       WDTools.org
   Author URI:   https://wdtools.org
 */


// Load assets for the Back-end
function gutenberg_4chan_block() {
  wp_enqueue_script(
    'gutenberg-notices-block-active-editor',
    plugins_url( 'block.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element' )
  );

  wp_enqueue_style(
    'gutenberg-notices-block-active-editor',
    plugins_url( 'editor.css', __FILE__ ),
    array()
  );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_4chan_block' );



// Load assets for the Front-end
function gutenberg_4chan_block_frontend() {

  wp_enqueue_style(
    'gutenberg-notices-block-editor',
    plugins_url( 'style.css', __FILE__ ),
    array()
  );
}

add_action( 'wp_enqueue_scripts', 'gutenberg_4chan_block_frontend' );



// Add JavaScript and jQuery (from Cloudflare CDN in case there is no jQuery on the page)
// in the footer so that when there is a 4chan block on the page the script is executed
function add_4chan_script() {

  echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script><script>$(document).ready(function () {

let board = $(".board_type_4chan").val();
let post_amount = $(".posts_amount_4chan").val();

// Get 4chan data
$.ajax({
  url: window.location.origin + "/wp-content/plugins/4chan_posts/get_data.php",
  type: "POST",
  cache: false,
  format: "json",
  data: {
    board: board,
    post_amount: post_amount
  },
  success: function(data) {
    $(".four_chan_container").prepend("<h3>4chan posts</h3>");
    $(".four_chan_posts_container").append(data);

  },
  error: function() {
    console.log("error");
  }
});

});</script>';

}

add_filter('wp_footer', 'add_4chan_script');

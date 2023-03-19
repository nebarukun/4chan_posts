<?php

error_reporting(0);

// Get passed board and posts amount
$board = $_POST['board'];
$post_amount = $_POST['post_amount'];

// Add passed board to API URL
$api_url = 'https://a.4cdn.org/' . $board . '/catalog.json';

// Read JSON file
$json_data = file_get_contents($api_url);

// Decode JSON
$response_data = json_decode($json_data, true);

$counter = 0;
$post_structure = "";

// Loop through the array
foreach ($response_data as $post_pages) {

  foreach ($post_pages as $all_posts) {

    foreach ($all_posts as $post) {

      // If counter is equal to desired post amount exit the loop
      if ( $counter == $post_amount ) {
        break;

      } else {

        // Build the HTML structure for the post
        $post_structure .= '<div class="post_container">';

        if ($post["sub"]) {
          $post_structure .= '<h4>' . $post["sub"] . '</h4>';
        } else {
          $post_structure .= '<h4>No title</h4>';
        }

        if ($post["com"]) {
          $post_structure .= '<p>' . $post["com"] . '</p>';
        } else {
          $post_structure .= '<p>No description.</p>';
        }

        $post_structure .= '<div class="post_info"><span class="post_replies">Replies: <b>' . $post["replies"] . '</b></span><span class="post_images">Images: <b>' . $post["images"] . '</b></span></div><a href="https://boards.4channel.org/' . $board . '/thread/' . $post["no"] . '" target="_blank" class="to_4chan_post">Go to post</a></div>';
      }
      $counter++;
    }
  }
}

echo $post_structure;

?>

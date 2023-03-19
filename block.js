
var el = wp.element.createElement;

// Add custom icon to block
const customIcon = el('svg', { width: 20, height: 20 },
                      el('path', { d: "M11.07 8.82S9.803 1.079 5.145 1.097C2.006 1.109.78 4.124 3.055 4.802c0 0-2.698.973-2.698 2.697 0 1.725 4.274 3.54 10.713 1.32zm1.931 5.924s.904 7.791 5.558 7.991c3.136.135 4.503-2.82 2.262-3.604 0 0 2.74-.845 2.82-2.567.08-1.723-4.105-3.737-10.64-1.82zm-3.672-1.55s-7.532 2.19-6.952 6.813c.39 3.114 3.53 3.969 3.93 1.63 0 0 1.29 2.559 3.002 2.351 1.712-.208 3-4.67.02-10.794zm5.623-2.467s7.727-1.35 7.66-6.008c-.046-3.138-3.074-4.333-3.728-2.051 0 0-1-2.686-2.726-2.668-1.724.018-3.494 4.312-1.206 10.727z" } )
);



wp.blocks.registerBlockType('gutenberg-notice-block/notices', { // Define the block
	title: '4chan',
	icon: customIcon,
	category: 'text',
	attributes: {
		           type: { type: 'string', default: 'default' },
		           title: { type: 'string' },
	},
	edit: function(props) { // Back-end - 4chan block

	  function updateBoard(newdata) {
	    props.setAttributes( { title: event.target.value } );
	  }

 	  function updatePosts(newdata) {
	    props.setAttributes( { type: event.target.value } );
	  }

		return el( 'div',
			         {
				         className: 'four_chan_container'
			         },
			         el(
				         'select',
				         {
					         onChange: updateBoard,
					         value: props.attributes.title,
				         },
				         el("option", {value: "", selected: true}, "Choose Board"),
                 el("option", {value: "3"}, "3DCG"),
                 el("option", {value: "adv"}, "Advice"),
                 el("option", {value: "an"}, "Animals & Nature"),
                 el("option", {value: "a"}, "Anime & Manga"),
                 el("option", {value: "c"}, "Anime/Cute"),
                 el("option", {value: "w"}, "Anime/Wallpapers"),
                 el("option", {value: "ic"}, "Artwork/Critique"),
                 el("option", {value: "o"}, "Auto"),
                 el("option", {value: "biz"}, "Business & Finance"),
                 el("option", {value: "co"}, "Comics & Cartoons"),
                 el("option", {value: "cgl"}, "Cosplay & EGL"),
                 el("option", {value: "news"}, "Current News"),
                 el("option", {value: "diy"}, "Do-It-Yourself"),
                 el("option", {value: "xs"}, "Extreme Sports"),
                 el("option", {value: "fa"}, "Fashion"),
                 el("option", {value: "fit"}, "Fitness"),
                 el("option", {value: "ck"}, "Food & Cooking"),
                 el("option", {value: "gd"}, "Graphic Design"),
                 el("option", {value: "his"}, "History & Humanities"),
                 el("option", {value: "int"}, "International"),
                 el("option", {value: "lgbt"}, "LGBT"),
                 el("option", {value: "lit"}, "Literature"),
                 el("option", {value: "m"}, "Mecha"),
                 el("option", {value: "mu"}, "Music"),
                 el("option", {value: "i"}, "Oekaki"),
                 el("option", {value: "jp"}, "Otaku Culture"),
                 el("option", {value: "out"}, "Outdoors"),
                 el("option", {value: "po"}, "Papercraft & Origami"),
                 el("option", {value: "x"}, "Paranormal"),
                 el("option", {value: "p"}, "Photography"),
                 el("option", {value: "vp"}, "Pokémon"),
                 el("option", {value: "mlp"}, "Pony"),
                 el("option", {value: "pw"}, "Professional Wrestling"),
                 el("option", {value: "qst"}, "Quests"),
                 el("option", {value: "b"}, "Random"),
                 el("option", {value: "vr"}, "Retro Games"),
                 el("option", {value: "sci"}, "Science & Math"),
                 el("option", {value: "sp"}, "Sports"),
                 el("option", {value: "g"}, "Technology"),
                 el("option", {value: "tv"}, "Television & Film"),
                 el("option", {value: "toy"}, "Toys"),
                 el("option", {value: "tg"}, "Traditional Games"),
                 el("option", {value: "n"}, "Transportation"),
                 el("option", {value: "trv"}, "Travel"),
                 el("option", {value: "vip"}, "Very Important Posts"),
                 el("option", {value: "v"}, "Video Games"),
                 el("option", {value: "vg"}, "Video Game Generals"),
                 el("option", {value: "vmg"}, "Video Games/Mobile"),
                 el("option", {value: "vm"}, "Video Games/Multiplayer"),
                 el("option", {value: "vrpg"}, "Video Games/RPG"),
                 el("option", {value: "vst"}, "Video Games/Strategy"),
                 el("option", {value: "vt"}, "Virtual YouTubers"),
                 el("option", {value: "wg"}, "Wallpapers/General"),
                 el("option", {value: "wsg"}, "Worksafe GIF"),
                 el("option", {value: "wsr"}, "Worksafe Requests")
			         ),
			         el(
				         'select',
				         {
					         onChange: updatePosts,
					         value: props.attributes.type
				         },
                 el("option", {value: "0", selected: true}, "Posts amount"),
				         el("option", {value: "2" }, "2"),
				         el("option", {value: "4" }, "4"),
				         el("option", {value: "6" }, "6"),
				         el("option", {value: "8" }, "8")
			         ),
			         el(
				         'input',
				         {
					         type: 'hidden',
					         value: props.attributes.title,
					         onChange: updateBoard,
				         }
			         ),
			         el(
				         'input',
				         {
					         type: 'hidden',
					         value: props.attributes.type,
					         onChange: updatePosts,
				         }
			         )

		);
	},
	save: function(props) { // Front-end - 4chan block

		return el( 'div',
			         {
				         className: 'four_chan_container'
			         },
			         el(
                 'input',
				         {
					         type: 'hidden',
					         value: props.attributes.title,
					         className: 'board_type_4chan'
				         }
               ),
			         el(
                 'input',
				         {
					         type: 'hidden',
					         value: props.attributes.type,
					         className: 'posts_amount_4chan'
				         }
               ),
               el(
                 'div',
				         {
				           className: 'four_chan_posts_container'
				         }
               ),

		);

	}
});

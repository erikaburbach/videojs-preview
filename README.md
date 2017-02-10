# videojs-preview

This is a Chrome extension, to load the preview/unpublished version of a player, for testing unreleased players in websites, by doing the following:

- for in-page embeds, replaces the request url for the index.min.js file
- for iframe embeds, replaces the request url for the iframe file location
- hides the watermark normally applied to preview players (display:none for the DOM element after the loading spinner)

# Installation

Extensions can be loaded in unpacked mode by following the following steps:

- Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions).
- Enable Developer mode by ticking the checkbox in the upper-right corner.
- Click on the "Load unpacked extension..." button.
<<<<<<< Updated upstream
- Select the directory containing the unpacked extension: videojs-preview/extension
=======
- Select the directory containing the unpacked extension: videojs-preview/extension

# Known Issues

- does not work with account default player


1.0.1 add support for unminified index.js file, catch elements length in contents.hs
1.0 Initial commit
>>>>>>> Stashed changes

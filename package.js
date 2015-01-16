Package.describe({
        name: 'xaiki:leaflet-styledlayercontrol',
        summary: "A Leaflet plugin that manages layers by organization into categories or groups.",
        version: '1.0.0',
        git: 'https://github.com/xaiki/Leaflet.StyledLayerControl'
});

Package.onUse(function (api) {
        api.versionsFrom('1.0.2.1');
        api.use(['mrt:leaflet@0.3.8']);

        api.addFiles('css/images/delete.png', 'client');
        api.addFiles('css/images/layers.png', 'client');
        api.addFiles('css/images/bgnoise_lg.jpg', 'client');
        api.addFiles('css/images/check.png', 'client');
        api.addFiles('css/images/arrow_up.png', 'client');
        api.addFiles('css/images/arrow_down.png', 'client');
        api.addFiles('css/fonts/Alegreya-Italic.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-LightItalic.ttf', 'client');
        api.addFiles('css/fonts/Alegreya-BlackItalic.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-MediumItalic.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-Medium.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-BoldItalic.ttf', 'client');
        api.addFiles('css/fonts/BebasNeue-webfont.eot', 'client');
        api.addFiles('css/fonts/Ubuntu-Italic.ttf', 'client');
        api.addFiles('css/fonts/Alegreya-Regular.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-Regular.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-Light.ttf', 'client');
        api.addFiles('css/fonts/Alegreya-BoldItalic.ttf', 'client');
        api.addFiles('css/fonts/BebasNeue-webfont.svg', 'client');
        api.addFiles('css/fonts/BebasNeue-webfont.ttf', 'client');
        api.addFiles('css/fonts/Alegreya-Bold.ttf', 'client');
        api.addFiles('css/fonts/Alegreya-Black.ttf', 'client');
        api.addFiles('css/fonts/Ubuntu-Bold.ttf', 'client');
        api.addFiles('css/fonts/BebasNeue-webfont.woff', 'client');
        api.addFiles('css/styledLayerControl.css', 'client');
        api.addFiles('src/styledLayerControl.js', 'client');
});

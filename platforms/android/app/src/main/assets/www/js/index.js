document.addEventListener("deviceready", function () {

    var mapDiv = document.getElementById("map_canvas");
    var options = {
        'camera': {
            'target': data[0].position,
            'zoom': 3
        }
    };
    var map = plugin.google.maps.Map.getMap(mapDiv, options);
    map.on(plugin.google.maps.event.MAP_READY, onMapReady);
});


function onMapReady() {
    var map = this;

    var label = document.getElementById("label");

    var baseArrayClass = new plugin.google.maps.BaseArrayClass(data);

    baseArrayClass.map(function(options, cb) {
        options.icon = {
            "url": "data:image/png;base64,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",
            //"url": "img/marker_logo.png", // use this line to compare how the info window positions itself
            "size": {
                "width": 30, "height": 40
            }};
        map.addMarker(options, cb);
    }, function(markers) {
        for (var i = markers.length - 1; i >= 0; i--) {
            markers[i].on(plugin.google.maps.event.MARKER_CLICK, function(position, marker) {
                openHtmlWindow(marker)
            });
        }
    });
}

function openHtmlWindow (marker) {
    var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();

    htmlInfoWindow.setContent(htmlWindowContents());

    htmlInfoWindow.open(marker);
}

function htmlWindowContents () {
    return "<div style='height:150px'>Info window!!!<button type='button' disabled>BUTTON</button></div>";
}

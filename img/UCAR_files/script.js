function initMap() {
    var coordinates = {lat: 47.877582, lng: 35.020225},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
    		icon: "http://rightblog.ru/wp-content/uploads/2016/07/theatre_icon.png"
        });
}
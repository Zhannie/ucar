var map,
	marker,
	coordinates = {lat: 47.877335, lng: 35.020212},
	coordMap = {lat: 47.877632, lng: 35.033960},
    coordMobMap = {lat: 47.876132, lng: 35.021460},
	firstDiv = document.querySelector('div.first'),
	textDiv = document.querySelector('div.first div.text'),
	nameDiv = document.querySelector('div.first div.text button'),
	imgDiv = document.querySelector('div.first div.auto'),
	seventhDiv = document.querySelector('div.seventh div.inner'),
	nameSevDiv = document.querySelector('div.seventh div.inner .text'),
	beforeAfter = document.querySelector('.seventh .inner .g-before-after'),
	footerDiv = document.querySelector('.inFooter'),
	numbers = document.querySelector('.numbers.right'),
	divRight = document.querySelector('.inFooter .right'),
	button = document.getElementById('mobBtn'),
	mobMenu = document.querySelector('.mobileMenu'),
	pics = document.querySelectorAll('.gallery img'),
	galleryFull = document.getElementById('galleryFull'),
	displayedImg = document.querySelector('.displayedImg'),
	closeBtn = document.getElementById('close'),

	optimus = document.querySelector('.optimus'),
	optImg = document.querySelectorAll('.optimus img'),

	about = document.getElementById('about'),
	aboutImg = document.querySelectorAll('#about .inner .gallery figure a img'),
	aboutText = document.querySelector('#about .inner:last-child div.text'),
	aboutTextImg = document.querySelector('#about .inner:last-child div.image');


function initMap() {
		if(document.body.clientWidth > 576) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordMap,
        	zoom: 15,
        	disableDefaultUI: true
        });
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
    		icon: "img/point.png"
        });
    }else{
    	map = new google.maps.Map(document.getElementById('map'), {
            center: coordMobMap,
        	zoom: 17,
        	disableDefaultUI: true
        });
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
    		icon: "img/point.png"
        });
    }
};

function changeOrder() {
	if(document.body.clientWidth < 768) {
		firstDiv.appendChild(imgDiv);
		firstDiv.appendChild(nameDiv);
		seventhDiv.appendChild(nameSevDiv);
		footerDiv.appendChild(numbers);
	}else{
		firstDiv.appendChild(imgDiv);
		firstDiv.appendChild(textDiv);
		textDiv.appendChild(nameDiv);
		footerDiv.appendChild(divRight);
		// seventhDiv.appendChild(beforeAfter);

	};

	initMap();
};

window.addEventListener('load', changeOrder);
window.addEventListener('resize', changeOrder);
window.addEventListener('scroll', animateAll);


button.addEventListener('click', open);

function open() {
	if(mobMenu.style.display == "block") {
		mobMenu.style.display = 'none';
	}else{
		mobMenu.style.display = "block";
	}
};


$('#cars').beforeafter();

function animateAll() {
	var coords = optimus.getBoundingClientRect(),
		coordsAbout = about.getBoundingClientRect(),
		coordsAboutText = aboutText.getBoundingClientRect();

	if (coords.top <= '400') {
		optimus.classList.add('fadeInUp');
		
	};

	if(coordsAbout.top <= '400') {
		for(var i = 0; i < aboutImg.length; i++){
		aboutImg[i].classList.add('flipInX');
		};
	};

	
};


$(document).ready(function(){
    $('#mainMenu').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = ($(id).offset().top - 60);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $('#first').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = ($(id).offset().top - 60);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $('#pinbar').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = ($(id).offset().top - 60);
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

});

// GALLERY MOBILE
    if(document.body.clientWidth < 576) {
    var item = document.querySelectorAll('figure'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

        var slideIndex=1;
        showImg(slideIndex);

        function plusImg(n) {
        showImg(slideIndex += n);
    };
    };

    function showImg(n) {
        if(document.body.clientWidth < 576){
        var i;
        if( n > item.length) {slideIndex = 1}
        if(n < 1) {slideIndex = item.length}
            for (i = 0; i < item.length; i++) {
                item[i].style.display = 'none';
            }
        item[slideIndex - 1].style.display = 'block';
    };
};

    

   

   

// GALLERY
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i];// <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0];// <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');


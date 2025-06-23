// Инициализация Яндекс.Карты для футера
function initFooterMap() {
  if (!window.ymaps) return;
  ymaps.ready(function () {
    var map = new ymaps.Map('footer-map', {
      center: [52.754797, 41.455258], // Тамбов, б-р Строителей, 3Г
      zoom: 16,
      controls: []
    });
    var placemark = new ymaps.Placemark([52.754797, 41.455258], {
      balloonContent: '<b>ООО Навикон</b><br>б-р Строителей, 3Г'
    }, {
      preset: 'islands#blueDotIcon',
      iconColor: '#2563eb'
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom');
    map.controls.add('zoomControl', { position: { right: 10, top: 10 } });
  });
}

// Плавное появление карты
function fadeInMap() {
  var el = document.getElementById('footer-map');
  if (el) {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1.2s';
    setTimeout(function() { el.style.opacity = 1; }, 400);
  }
}

// Подключение скрипта Яндекс.Карт и инициализация
(function(){
  var script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  script.onload = function() {
    initFooterMap();
    fadeInMap();
  };
  document.head.appendChild(script);
})(); 

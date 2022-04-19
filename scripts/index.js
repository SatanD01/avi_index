$(function () {
    $('.dd-text').on('click', function () {
        $('.dd-toggle').slideDown();
        $('.dd-shadow').show();
        $('.dd-lang-toggle').slideUp();
    });

    $('.dd-shadow').on('click', function () {
        $('.dd-toggle').slideUp();
        $('.dd-lang-toggle').slideUp();
        $('.dd-shadow').hide();
    });

    $('.lang-text').on('click', function () {
        $('.dd-lang-toggle').slideDown();
        $('.dd-toggle').slideUp();
        $('.dd-shadow').show();
    });

    $(':radio[name="payment"]').click(function() {
        $(".form-small").text($(this).val());
    })

    $('.adlPlus').click(function() {
        let $input = $(this).parent().find('.adlInp');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    });

    $('.adlMin').click(function() {
        let $input = $(this).parent().find('.adlInp');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
    });

    $('.childPlus').click(function() {
        let $input = $(this).parent().find('.childInp');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    });

    $('.childMin').click(function() {
        let $input = $(this).parent().find('.childInp');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
    });

    $('.kidPlus').click(function() {
        let $input = $(this).parent().find('.kidInp');
        let count = parseInt($input.val()) + 1;
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
        $input.val(parseInt(count));
    });

    $('.kidMin').click(function() {
        let $input = $(this).parent().find('.kidInp');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
    });

    $('.plus, .min').click(function() {
        let fin = Number($('.adlInp').val()) + Number($('.childInp').val()) + Number($('.kidInp').val());
        $(".pers-count").text(fin);
    });

    $(':radio[name="pers-count"]').click(function() {
        $(".form-small2").text($(this).val());
    });
    $('#select-country2').selectize({
        options: [
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'ташкент',
                city: 'Ташкент',
                country: 'Узбекистан',
                code: 'TAS'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'москва',
                city: 'Москва',
                country: 'Россия',
                code: 'MOW'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'украина',
                city: 'Украина',
                country: 'Россия',
                code: 'IEV'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'анталья',
                city: 'Анталья',
                country: 'Турция',
                code: 'AYT'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'аланья',
                city: 'Аланья',
                country: 'Турция',
                code: 'GZP'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'казань',
                city: 'Казань',
                country: 'Казахстан',
                code: 'KZN'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'алматы',
                city: 'Алматы',
                country: 'Казахстан',
                code: 'ALA'
            },
        ],
        labelField: 'city',
        searchField: ['city', 'code', 'country'],
        maxOptions: 5,
        render: {
            item: function (data, escape) {
                return '<div id="tour_item2">' +  escape(data.city) + '</div>'
            },
            option: function(data, escape) {
                return  '<div class="tour-class d-flex">' +
                    // '<i class="'+ escape(data.ico) +'"></i>' +
                    '<div class="flex-grow-1"><span class="tour-city">' + escape(data.city) + ',</span> ' +
                    '<span class="tour-country">' + escape(data.country) + '</span></div> ' +
                    '<span class="tour-code flex-grow-2">'+ escape(data.code) +'</span>' +
                    '</div>';
            }
        }
    });
    $('#select-country1').selectize({
        options: [
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'ташкент',
                city: 'Ташкент',
                country: 'Узбекистан',
                code: 'TAS'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'москва',
                city: 'Москва',
                country: 'Россия',
                code: 'MOW'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'украина',
                city: 'Украина',
                country: 'Россия',
                code: 'IEV'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'анталья',
                city: 'Анталья',
                country: 'Турция',
                code: 'AYT'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'аланья',
                city: 'Аланья',
                country: 'Турция',
                code: 'GZP'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'казань',
                city: 'Казань',
                country: 'Казахстан',
                code: 'KZN'
            },
            {
                ico: 'bi bi-arrow-up-right-circle',
                value: 'алматы',
                city: 'Алматы',
                country: 'Казахстан',
                code: 'ALA'
            },
        ],
        labelField: 'city',
        searchField: ['city', 'code', 'country'],
        maxOptions: 5,
        render: {

            item: function (data, escape) {
                return '<div id="tour_item1">' +  escape(data.city) + '</div>'
            },
            option: function(data, escape) {
                return  '<div class="tour-class d-flex">' +
                            // '<i class="'+ escape(data.ico) +'"></i>' +
                            '<div class="flex-grow-1"><span class="tour-city">' + escape(data.city) + ',</span> ' +
                            '<span class="tour-country">' + escape(data.country) + '</span></div>' +
                            '<span class="tour-code flex-grow-2">'+ escape(data.code) +'</span>' +
                        '</div>';
            }
        }
    });

    const swiper = new Swiper('.swiper-desc', {
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        lazy: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const swiper_mob = new Swiper('.swiper-mob', {
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        autoplay:  {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: false,
        pagination: false
    });


    let typed = new Typed('.type-word', {
        strings: ["Россию", "Турцию", "Казахстан",],
        cursorChar: '|',
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 4000,
        loop: true
    });

    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        parallax: false,
        responsiveWidth: 768,
        responsiveSlides: true,
        navigation: true,
        navigationPosition: 'right',
    });

    new Litepicker({
        element: document.getElementById('start-date'),
        hotelMode: 1,
        disallowBookedDaysInRange: 0,
        selectForward: 0,
        minDays: 1,
        minDate: new Date(),
        lang: "ru-Ru",
        format: "D-MMM",
        tooltipText: {
            one: "ночь",
            few: "ночи",
            other: "ночей",
            many: "ночей",
        },
    });

    new Litepicker({
        element: document.getElementById('end-date'),
        hotelMode: 1,
        disallowBookedDaysInRange: 0,
        selectForward: 0,
        minDays: 1,
        minDate: new Date(),
        lang: "ru-Ru",
        format: "D-MMM",
        tooltipText: {
            one: "ночь",
            few: "ночи",
            other: "ночей",
            many: "ночей",
        },
    });

});
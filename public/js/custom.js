// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

let input_pdf = document.getElementById("file_equip");
function compromir_pdf () {
    const file = input_pdf.files[0]; // Obter o primeiro arquivo selecionado (assumindo que seja apenas um)
    if(!file) {
        console.error("Nenhum arquivo selecionado.");
        return;
    }
    JSZipUtils.getBinaryContent("texto", function (err, data) {
        if (err) {
            throw err;
        }
        var zip = new JSZip();
        zip.file("texto", data, { binary: true });
        zip.generateAsync({ type: "blob" }).then(function (content) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var url = window.URL.createObjectURL(content);
            a.href = url;
            a.download = "arquivo_compactado.zip";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    })
}

marca d'agua 
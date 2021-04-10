document.addEventListener("DOMContentLoaded", function (event) {
    var max_tip = document.getElementById("maximize-tip");
    max_tip.style.display = "none";
    var thumbnailElement = document.getElementById("smart_thumbnail");
//    a set of instructions that will give a tip to "click to maximize" and allows the user to see a larger picture
    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "profile-picture-small") {
            thumbnailElement.className = "profile-picture-big";
            max_tip.style.display = "none";
        } else if (thumbnailElement.className == "profile-picture-big") {
            thumbnailElement.className = "profile-picture-small";

        }
    });
    thumbnailElement.addEventListener("mouseover", function () {
        if (thumbnailElement.className == "profile-picture-small") {
            thumbnailElement.style.marginTop = "10px";
            max_tip.style.display = "inline";
            max_tip.style.position = "absolute";
        } else if (thumbnailElement.className == "profile-picture-big") {
            max_tip.style.display = "none";

        }

    });
    thumbnailElement.addEventListener("mouseout", function () {
        max_tip.style.display = "none";
    });
    // Disqus code
    var disqus_config = function () {
        this.page.url = PAGE_URL;  
        this.page.identifier = PAGE_IDENTIFIER; 
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://35-173-234-177-index-html.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    var fileName = location.href.split("/").slice(-1);
    console.log(fileName);






});

// A function that computes the required values and updates the fields in the table found in tables.html

var calculator = function () {
    var mm6 = document.getElementById('6mm').value;
    var mm8 = document.getElementById('8mm').value;
    var mm10 = document.getElementById('10mm').value;
    var mm12 = document.getElementById('12mm').value;
    var mm14 = document.getElementById('14mm').value;
    var mm16 = document.getElementById('16mm').value;
    var mm20 = document.getElementById('20mm').value;
    var mm24 = document.getElementById('24mm').value;
    var mm28 = document.getElementById('28mm').value;
    var mm30 = document.getElementById('30mm').value;
    var mm32 = document.getElementById('32mm').value;
    var w6 = 2.664, w8 = 4.74, w10 = 7.404, w12 = 10.656, w14 = 14.52, w16 = 18.96;
    var w20 = 29.64, w24 = 42.6, w28 = 58.08, w30 = 66.564, w32 = 75.72;
    var tw6 = mm6 * w6;
    var tw6 = mm6 * w6
    var tw8 = mm8 * w8;
    var tw10 = mm10 * w10;
    var tw12 = mm12 * w12;
    var tw14 = mm14 * w14;
    var tw16 = mm16 * w16;
    var tw20 = mm20 * w20;
    var tw24 = mm24 * w24;
    var tw28 = mm28 * w28;
    var tw30 = mm30 * w30;
    var tw32 = mm32 * w32;
    document.getElementById("quan6").innerHTML = mm6;
    document.getElementById("quan8").innerHTML = mm8;
    document.getElementById("quan10").innerHTML = mm10;
    document.getElementById("quan12").innerHTML = mm12;
    document.getElementById("quan14").innerHTML = mm14;
    document.getElementById("quan16").innerHTML = mm16;
    document.getElementById("quan20").innerHTML = mm20;
    document.getElementById("quan24").innerHTML = mm24;
    document.getElementById("quan28").innerHTML = mm28;
    document.getElementById("quan30").innerHTML = mm30;
    document.getElementById("quan32").innerHTML = mm32;
    document.getElementById("barton6").innerHTML = tw6.toFixed(4) / 1000;
    document.getElementById("barton8").innerHTML = tw8.toFixed(4) / 1000;
    document.getElementById("barton10").innerHTML = tw10.toFixed(4) / 1000;
    document.getElementById("barton12").innerHTML = tw12.toFixed(4) / 1000;
    document.getElementById("barton14").innerHTML = tw14.toFixed(4) / 1000;
    document.getElementById("barton16").innerHTML = tw16.toFixed(4) / 1000;
    document.getElementById("barton20").innerHTML = tw20.toFixed(4) / 1000;
    document.getElementById("barton24").innerHTML = tw24.toFixed(4) / 1000;
    document.getElementById("barton28").innerHTML = tw28.toFixed(4) / 1000;
    document.getElementById("barton30").innerHTML = tw30.toFixed(4) / 1000;
    document.getElementById("barton32").innerHTML = tw32.toFixed(4) / 1000;
    document.getElementById("tw6").innerHTML = tw6.toFixed(3) + " Kg";
    document.getElementById("tw8").innerHTML = tw8.toFixed(3) + " Kg";
    document.getElementById("tw10").innerHTML = tw10.toFixed(3) + " Kg";
    document.getElementById("tw12").innerHTML = tw12.toFixed(3) + " Kg";
    document.getElementById("tw14").innerHTML = tw14.toFixed(3) + " Kg";
    document.getElementById("tw16").innerHTML = tw16.toFixed(3) + " Kg";
    document.getElementById("tw20").innerHTML = tw20.toFixed(3) + " Kg";
    document.getElementById("tw24").innerHTML = tw24.toFixed(3) + " Kg";
    document.getElementById("tw28").innerHTML = tw28.toFixed(3) + " Kg";
    document.getElementById("tw30").innerHTML = tw30.toFixed(3) + " Kg";
    document.getElementById("tw32").innerHTML = tw32.toFixed(3) + " Kg";

    var totalWeight = tw6 + tw8 + tw10 + tw12 + tw14 + tw16 + tw20 + tw24 + tw28 + tw30 + tw32;


    document.getElementById("kgs").innerHTML = (totalWeight).toFixed(3) + " Kg";
    document.getElementById("tons").innerHTML = (totalWeight / 1000).toFixed(3) + " Ton";
    var price = document.getElementById("price").value;
    var total_cost = document.getElementById("total-cost");
    total_cost.innerHTML= (price*totalWeight.toFixed(3)).toFixed(2);

}
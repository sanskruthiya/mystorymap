import * as maplibregl from "maplibre-gl";
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

const init_center = [139.93003, 35.72164-1];
const init_coord = [139.93003, 35.72164];
const init_zoom = 5;
const init_bearing = 0;
const init_pitch = 0;

const map = new maplibregl.Map({
    container: 'map',
    style:'https://tile2.openstreetmap.jp/styles/osm-bright-ja/style.json',
    center: init_center,
    interactive: true,
    zoom: init_zoom,
    bearing: init_bearing,
    pitch: init_pitch,
    attributionControl:false
});

const attCntl = new maplibregl.AttributionControl({
    compact: true
});

map.addControl(attCntl, 'bottom-right');
map.setRenderWorldCopies(true);
map.panBy([0,10]);

const chapters = {
    '1. 1985 Chiba, Japan': {
        center: init_center,
        zoom: init_zoom,
        bearing: init_bearing,
        pitch: init_pitch,
        speed: 1,
        coordinates: init_coord,
        caption: '<img class="photo" loading="lazy" src="app/image/01_Ichikawa.jpg" width="100%"><p class="tipstyle01">1985</p><p class="tipstyle02">Born in Ichikawa-city, Chiba-prefecture, Japan. <br><span class="style01">Tap this popup and fly to the next chapter!</span></p>',
        popup_flag: 'top',
    },
    '2. 2004-2008 Chiba, Japan': {
        center: [140.10429, 35.62748],
        zoom: 7,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [140.10429, 35.62748],
        caption: '<p class="tipstyle01">2004.4 - 2008.3</p><p class="tipstyle02">Bachelor of Engineering, Urban Environment Systems</p><hr><p class="tipstyle02">Chiba University</p>',
        popup_flag: 'top',
    },
    '3. 2008-2010 Tokyo, Japan': {
        center: [139.77686, 35.67462],
        zoom: 7,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [139.77686, 35.67462],
        caption: '<p class="tipstyle01">2008.4 - 2010.3</p><p class="tipstyle02">Worked as a <span class="style01">city planner</span> in Tokyo.<br>Revised city plans and land re-zoning plans; facilitated resident-participatory city planning workshops.</p><hr><p class="tipstyle02">Planning Division, IDEC CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '4. 2010-2012 Kandy, Sri Lanka': {
        center: [80.63856,7.29355-1.5],
        zoom: 6,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [80.69039, 7.25143],
        caption: '<img class="photo" loading="lazy" src="app/image/04_SriLanka.jpg" width="100%"><p class="tipstyle01">2010.4 - 2012.6</p><p class="tipstyle02">Participated in a project for <span class="style01">supporting local specialty products</span> in Kandy, Sri Lanka.</p><hr><p class="tipstyle02">Community development officer, JICA Overseas Cooperation Volunteer (JOCV)</p>',
        popup_flag: 'top',
    },
    '5. 2012-2013 Kandy, Sri Lanka': {
        center: [80.63856,7.29355-1.5],
        zoom: 6,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [80.63856,7.29355],
        caption: '<img class="photo" loading="lazy" src="app/image/05_NatualCoffee.jpg" width="100%"><p class="tipstyle01">2012.8 - 2013.9</p><p class="tipstyle02"><span class="style01">Established a coffee shop "Natural Coffee"</span>, supervising its processing, distributing, and marketing systems.</p><hr><p class="tipstyle02">Co-founder & Project Manager, Japan Fair Trade Corporation</p>',
        popup_flag: 'top',
    },
    '6. 2013-2014 Birmingham, UK': {
        center: [-1.93057, 52.45003-1.5],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [-1.93057, 52.45003],
        caption: '<img class="photo" loading="lazy" src="app/image/06_Birmingham.jpg" width="100%"><p class="tipstyle01">2013.10 - 2014.9</p><p class="tipstyle02">Master of Science, International Development Department (Urban Development Pathway).</p><hr><p class="tipstyle02">University of Birmingham</p>',
        popup_flag: 'top',
    },
    '7. 2014 Lusaka, Zambia': {
        center: [28.33094, -15.40405-2],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [28.33094, -15.40405],
        caption: '<img class="photo" loading="lazy" src="app/image/07_Zambia.jpg" width="100%"><p class="tipstyle01">2014.6</p><p class="tipstyle02">Conducted a survey on use cases and issues of GIS in Zambia.</p><hr><p class="tipstyle02">University of Birmingham</p>',
        popup_flag: 'top',
    },
    '9. 2015 Kyiv, Ukraine': {
        center: [30.46044, 50.42192-1.5],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [30.46044, 50.42192],
        caption: '<img class="photo" loading="lazy" src="app/image/09_Kiyv.jpg" width="100%"><p class="tipstyle01">2015.9 - 6 months</p><p class="tipstyle02">Participated as a <span class="style01">coordinator</span> in JICA project for <span class="style01">Establishment of National Spatial Data Infrastructure in Ukraine</span>.</p><hr><p class="tipstyle02">Overseas Division, Kokusai Kogyo CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '10. 2016 Kigali, Rwanda': {
        center: [30.10493, -1.95826-1],
        zoom: 6,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [30.10493, -1.95826],
        caption: '<img class="photo" loading="lazy" src="app/image/10_Kigali.jpg" width="100%"><p class="tipstyle01">2016.9 - 3 months</p><p class="tipstyle02">Participated as <span class="style01">GIS expert</span> in JICA project for <span class="style01">Strengthening Non-Revenue Water Control in Kigali City Water Network, Rwanda</span>.</p><hr><p class="tipstyle02">Overseas Division, Kokusai Kogyo CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '11. 2016 Kandy Sri Lanka': {
        center: [80.63856,7.29355-1.5],
        zoom: 6,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [80.63856,7.29355],
        caption: '<img class="photo" loading="lazy" src="app/image/11_Kandy.jpg" width="100%"><p class="tipstyle01">2016.12 - 2 months</p><p class="tipstyle02">Participated as <span class="style01">chief adviser</span> in JICA SME Partnership project for <span class="style01">Survey on Introduction of the Integrated Management System of Distributed Coffee Production for Rural Farmers\' Community</span>.</p><hr><p class="tipstyle02">Overseas Division, Kokusai Kogyo CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '12. 2017 Port Moresby, Papua New Guinea': {
        center: [147.18250, -9.44634-2],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [147.18250, -9.44634],
        caption: '<img class="photo" loading="lazy" src="app/image/12_PapuaNewGuinea.jpg" width="100%"><p class="tipstyle01">2017.10 - 2 months</p><p class="tipstyle02">Participated as a <span class="style01">coordinator</span> in JICA project for <span class="style01">Capacity Building for Road Management and Planning in Papua New Guinea</span>.</p><hr><p class="tipstyle02">Overseas Division, Kokusai Kogyo CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '13. 2018 Dili, East Timor': {
        center: [125.54692, -8.55419-2],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [125.54692, -8.55419],
        caption: '<img class="photo" loading="lazy" src="app/image/13_EastTimor.jpg" width="100%"><p class="tipstyle01">2018.5 - 2 months</p><p class="tipstyle02">Participated as a <span class="style01">coordinator</span> in JICA SME Partnership project for <span class="style01">Feasibility Study on Road Slope Protection in East Timor</span>.</p><hr><p class="tipstyle02">Overseas Division, Kokusai Kogyo CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '14. 2019 Palo Alto, USA': {
        center: [-122.14537, 37.43386-0.1],
        zoom: 9,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [-122.14537, 37.43386],
        caption: '<img class="photo" loading="lazy" src="app/image/14_PaloAlto.jpg" width="100%"><p class="tipstyle01">2019.4</p><p class="tipstyle02">Visited Palo Alto in California.<br>Conducted meet-ups for technical exchange.</p><hr><p class="tipstyle02">Senior leader, Technology & Market Research / Global Business Design, VALUENEX CO.,LTD.</p>',
        popup_flag: 'top',
    },
    '15. 2019 Bucharest, Romania': {
        center: [26.10317, 44.43653-0.5],
        zoom: 7,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [26.10317, 44.43653],
        caption: '<img class="photo" loading="lazy" src="app/image/15_Bucharest.jpg" width="100%"><p class="tipstyle01">2019.8</p><p class="tipstyle02">Attended an international conference and gave a presentation: Natural Language Processing Meets FOSS4G.</p>',
        popup_flag: 'top',
    },
    '16. Present Tokyo/Chiba, Japan': {
        center: [139.73872, 35.71625-1],
        zoom: 5,
        bearing: 0,
        pitch: 0,
        speed: 0.5,
        coordinates: [139.73872, 35.71625],
        caption: '<p class="tipstyle01">2018.10 - present</p><p class="tipstyle02">Conducting technology trend analytics using patents and papers to accelerate R&D of private companies in Japan.</p><hr><p class="tipstyle02">Senior leader, Technology & Market Research / Global Business Design, VALUENEX CO.,LTD.</p>',
        popup_flag: 'top',
    },
}

let popup_top = new maplibregl.Popup({closeButton: true, closeOnClick: false, focusAfterOpen: false, anchor:"top", className:"t-popup", maxWidth:'320px'});
let popup_btm = new maplibregl.Popup({closeButton: true, closeOnClick: false, focusAfterOpen: false, anchor:"bottom", className:"t-popup", maxWidth:'320px'});

const chapterNames = Object.keys(chapters);
for (let i = 0; i < chapterNames.length; i++) {
    const selectChapter = document.getElementById('chapter-id');
    const optionName = document.createElement('option');
    optionName.value = chapterNames[i];
    optionName.textContent = chapterNames[i];
    selectChapter.appendChild(optionName);
}

if (chapters[chapterNames[0]]["popup_flag"]==='top'){
    popup_top.setLngLat(chapters[chapterNames[0]]["coordinates"]).setHTML(chapters[chapterNames[0]]["caption"]).setOffset([0,10]).addTo(map);
}else{
    popup_btm.setLngLat(chapters[chapterNames[0]]["coordinates"]).setHTML(chapters[chapterNames[0]]["caption"]).setOffset([0,-10]).addTo(map);
};

let select_flag = 0;
let chapter_i = 1;

const changePopup = function changePopup() {
    select_flag = 1;
    popup_top.remove();
    popup_btm.remove();
    if (chapter_i < chapterNames.length) {
        let chapter_id = chapterNames[chapter_i];
        map.flyTo({
            center: chapters[chapter_id]["center"],
            zoom: chapters[chapter_id]["zoom"],
            bearing: chapters[chapter_id]["bearing"],
            pitch: chapters[chapter_id]["pitch"],
            speed: chapters[chapter_id]["speed"],
            //curve: 1.5,
        });
        if (chapters[chapter_id]["popup_flag"]==='top'){
            popup_top.setLngLat(chapters[chapter_id]["coordinates"]).setHTML(chapters[chapter_id]["caption"]).setOffset([0,10]).addTo(map);
        }else{
            popup_btm.setLngLat(chapters[chapter_id]["coordinates"]).setHTML(chapters[chapter_id]["caption"]).setOffset([0,-10]).addTo(map);
        };
        let trigger = document.getElementsByClassName("t-popup");
        triggers = Array.from(trigger);
        triggers.forEach(function(target) {
            target.addEventListener('click', changePopup);
        });
        const select = document.getElementById('chapter-id');        
	    select.options[chapter_i].selected = true;
        chapter_i++;
    }else {
        popup_top.setLngLat([139.73872, 35.71625]).setHTML('<img class="photo" loading="lazy" src="app/image/00_Ichikawa.jpg" width="100%"><p class="tipstyle01">Thank you!</p><hr><p class="tipstyle02"><a href="https://www.linkedin.com/in/eita-horishita-2b8a605a/">Contact me via LinkedIn</a></p>').setOffset([0,20]).addTo(map);
    };
    select_flag = 0;
}

window.changePopup = changePopup;

const selectedChapter = document.querySelector('.chapter-set');
selectedChapter.addEventListener('change', function () {
    if (select_flag === 0){
        chapter_i = selectedChapter.selectedIndex;
        changePopup();
    }else{
        chapter_i = selectedChapter.selectedIndex;
        select_flag = 0;
    };
});

let trigger = document.getElementsByClassName("t-popup");
let triggers = Array.from(trigger);
triggers.forEach(function(target) {
  target.addEventListener('click', function () {
      changePopup();
  });
});

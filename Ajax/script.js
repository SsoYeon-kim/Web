var entries = [{
    "term": "getScript 함수",
    "definition": "매개변수로 URL주소만 받음, 해당 URL의 JavaScript 파일을 불러 읽어 들임"
}];

var html = 'getScript 함수 사용입니다.';

$.each(entries, function(){
    html += '<div class="entry">';
    html += '<h3 class="term">' + this['term'] + '</h3>';
    html += '<div class="definition">' + this['definition'] + '</div>';
    html += '</div>';
});

$('#dictionary').html(html);

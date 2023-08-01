//load
$(document).ready(function(){
    $('#load').click(function(){
        $('#dictionary').load('load.html');
        return false; // 클릭 이벤트의 기본 동작을 막기 위함
    });
});

//ajax
$(document).ready(function(){
    $('#ajax').click(function(){
        $.ajax({
            url: 'ajax.xml', // 요청이 전송되는 URL
            type: 'GET', // Http요청 방식
            dataType: 'xml', // Http요청 후 return하는 데이터의 Type
            // data : 서버로부터 받은 데이터 (AJAX요청을 통해 받아온 데이터)
            success: function(data){ // 성공적으로 서버로 값을 보냈을 경우 처리하는 코드
                $('#dictionary').empty();
                $.each($(data).find('entry'), function(){
                    var $entry = $(this);
                    var html = '<div class="entry">';
                    html += '<h3 class="term">' + $entry.find('h3').text() + '</h3>';
                    html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
                    html += '</div>';
                    $('#dictionary').append(html);
                });// end each
            }// end
        });// end ajax
        return false;
    });
});

//get
$(document).ready(function(){
    $('#get').click(function(){
        $.get('ajax.xml', function(data){
            $('#dictionary').empty();
            $(data).find('entry').each(function(){
                var $entry = $(this);
                var html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.find('h3').text() + '</h3>';
                html += '<div class="definition">' + $entry.find('definition').text() + '</div>';
                html += '</div>';
                $('#dictionary').append(html);
            });
        });
        return false;
    });
});

//getJSON
$(document).ready(function(){
    $('#json').click(function(){
        $.getJSON('json.json', function(data){
            $('#dictionary').empty();
            $.each(data, function(index, entry){
                var html = '<div class="entry">';
                html += '<h3 class="term">' + entry.term + '</h3>';
                html += '<div class="definition">' + entry.definition + '</div>';
                html += '</div>';
                $('#dictionary').append(html);
            }); //end each
        });// end json
        return false;
    });// end click
});

//getsScript
$(document).ready(function(){
    $('#script').click(function(){
        $.getScript('script.js');
        return false;
    });
});
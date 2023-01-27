$(function(){
    $('.open-btn').on('click', function(){
        $("#search-wrap").addClass('panelactive');
        $(".search_menu").addClass('panelactive');
        $(".circle_arrow").addClass('panelactive');
        $(".img_header").addClass('panelactive');
        $('#search-text').focus();
    });

    $(".close-btn").click(function (){
        $("#search-wrap").removeClass('panelactive');
        $(".search_menu").removeClass('panelactive');
        $(".circle_arrow").removeClass('panelactive');
        $(".img_header").removeClass('panelactive');
        $(".main").removeClass('panelactive');
    });

    $('a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
      });

    $(".slider").slick({
        autoplay : true,
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        dots : true,
    });

    function GethashID (hashIDName){
        if(hashIDName){
            //タブ設定
            $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
                var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
                if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
                    var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
                    $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
                    $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
                    //表示させるエリア設定
                    $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
                    $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
                }
            });
        }
    }
    $('.tab a').on('click', function() {
        var idName = $(this).attr('href'); //タブ内のリンク名を取得	
        GethashID (idName);//設定したタブの読み込みと
        return false;//aタグを無効にする
    });
    $(window).on('load', function () {
        $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
        $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
        var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
        GethashID (hashName);//設定したタブの読み込み
    });
});


/* ('.open-btn > i').click */

/* 確認 */
// $(function(){
 
//     $('.circle_arrow > p').css('color','red');
     
// });
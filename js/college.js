/**
 * Created by GavinVictory on 2015/7/19 0019.
 */
$(function(){
	location.href='#tab1' ;
});
/**
 * 加载文章内容
 */
function loadNews() {
    $('#newsTableDiv').hide() ;
    $('#contentDiv').show() ;
}
/**
 * 返回文章列表
 */
function backtolists() {
    $('#newsTableDiv').show() ;
    $('#contentDiv').hide() ;
}

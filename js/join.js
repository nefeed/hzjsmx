/**
 * Created by GavinVictory on 2015/7/19 0019.
 */
var verifycode ;
var verifypath ;
$(function(){
    var loc = location.href;
    var n1 = loc.length;//��ַ���ܳ���
    var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
    var id = loc.substr(n2+1, n1-n2);//��=�ź��������
    var op = parseInt( id ) ;
    var $tab1 = $('#tab1') ;
    var $tab2 = $('#tab2') ;
    var $tp1 = $('#tabpanel1') ;
    var $tp2 = $('#tabpanel2') ;
    $tab1.attr( 'class', '' ) ;
    $tab2.attr( 'class', '' ) ;
    $tp1.attr( 'class', 'tab-pane' ) ;
    $tp2.attr( 'class', 'tab-pane' ) ;
    switch( op ) {
        case 0:
            $tab1.attr( 'class', 'active' ) ;
            $tp1.attr( 'class', 'tab-pane active' ) ;
            break ;
        case 1:
            $tab2.attr( 'class', 'active' ) ;
            $tp2.attr( 'class', 'tab-pane active' ) ;
            break ;
        default:
            $tab1.attr( 'class', 'active' ) ;
            $tp1.attr( 'class', 'tab-pane active' ) ;
            break ;
    }
	joinpage();
	location.href='#tab1' ;
}) ;

/**
 * 加载页码
 */
function joinpage() {
	laypage({
      cont: 'page', //容器。值支持id名、原生dom对象，jquery对象,
      pages: 3, //总页数
      skip: false, //是否开启跳页
	  skin: 'molv',
      groups: 6, //连续显示分页数
      first: '首页', //若不显示，设置false即可
      last: '尾页', //若不显示，设置false即可
	  prev: false, //若不显示，设置false即可
      next: false, //若不显示，设置false即可
      hash: true, //开启hash
	  jump: function(obj){ //触发分页后的回调
		var $jp = $('#joinPicsDiv') ;
		var p = parseInt( obj.curr ) ;
		$jp.html('') ;
		switch( p ) {
			case 1:
			  $jp.html('<img src="img/fruitsale.png" alt="水果系分销图片" style="width: 100%;" /><img src="img/fruitagent.png" alt="水果系代理图片" style="width: 100%;" />') ;
			  break;
			case 2:
			  $jp.html('<img src="img/charcoalsale.png" alt="木炭系分销图片" style="width: 100%;" /><img src="img/charcoalagent.png" alt="木炭系代理图片" style="width: 100%;" />') ;
			  break;
			case 3:
			  $jp.html('<img src="img/collagensale.png" alt="胶原系分销图片" style="width: 100%;" /><img src="img/collagenagent.png" alt="胶原系代理图片" style="width: 100%;" />') ;
			  break;
			default:
			  $jp.html('<img src="img/fruitsale.png" alt="水果系分销图片" style="width: 100%;" /><img src="img/fruitagent.png" alt="水果系代理图片" style="width: 100%;" />') ;
			  break;
		}
      }
    });
}

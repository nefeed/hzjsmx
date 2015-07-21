$(function(){
	  var loc = location.href;
	  var n1 = loc.length;//地址的总长度
	  var n2 = loc.indexOf("=");//取得=号的位置
	  var id = loc.substr(n2+1, n1-n2);//从=号后面的内容
	  var op = parseInt( id ) ;
	  var $tab1 = $('#tab1') ;
	  var $tab2 = $('#tab2') ;
	  var $tab3 = $('#tab3') ;
	  var $tab4 = $('#tab4') ;
	  var $tab5 = $('#tab5') ;
	  var $tp1 = $('#tabpanel1') ;
	  var $tp2 = $('#tabpanel2') ;
	  var $tp3 = $('#tabpanel3') ;
	  var $tp4 = $('#tabpanel4') ;
	  var $tp5 = $('#tabpanel5') ;
	  $tab1.attr( 'class', '' ) ;
	  $tab2.attr( 'class', '' ) ;
	  $tab3.attr( 'class', '' ) ;
	  $tab4.attr( 'class', '' ) ;
	  $tab5.attr( 'class', '' ) ;
	  $tp1.attr( 'class', 'tab-pane' ) ;
	  $tp2.attr( 'class', 'tab-pane' ) ;
	  $tp3.attr( 'class', 'tab-pane' ) ;
	  $tp4.attr( 'class', 'tab-pane' );
	  $tp5.attr( 'class', 'tab-pane' ) ;
	  switch( op ) {
		case 0:
		  $tab1.attr( 'class', 'active' ) ;
		  $tp1.attr( 'class', 'tab-pane active' ) ;
		  break ;
		case 1:
		  $tab2.attr( 'class', 'active' ) ;
		  $tp2.attr( 'class', 'tab-pane active' ) ;
		  break ;
		case 2:
		  $tab3.attr( 'class', 'active' ) ;
		  $tp3.attr( 'class', 'tab-pane active' ) ;
		  break ;
		case 3:
		  $tab4.attr( 'class', 'active' ) ;
		  $tp4.attr( 'class', 'tab-pane active' ) ;
		  break ;
		case 4:
		  $tab5.attr( 'class', 'active' ) ;
		  $tp5.attr( 'class', 'tab-pane active' ) ;
		  break ;
		default:
		  $tab1.attr( 'class', 'active' ) ;
		  $tp1.attr( 'class', 'tab-pane active' ) ;
		  break ;
	  }
	  location.href='#tab1' ;
}) ;
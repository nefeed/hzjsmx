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
    getverify() ;
	location.href='#tab1' ;
}) ;

/**
 * 提交意见
 */
function submit() {
    var $title = $('#aTitle') ;
    var $msg = $('#aMsg') ;
    var $name = $('#aName') ;
    var $phone = $('#aPhone') ;
    var $qq = $('#aQQ') ;
    var $verifycode = $('#aVerifyCode') ;
    var title = $title.val() ;
    var msg = $msg.html() ;
    var name = $name.val() ;
    var phone = $phone.val() ;
    var qq = $qq.val() ;
    var verify = $verifycode.val() ;
    verify = verify.toUpperCase() ;
    // 验证码是否正确
    if ( verify != verifycode ) {
        alert( '验证码输入错误，请重新输入！' ) ;
        $verifycode.val('') ;
        getverify() ;
        $verifycode.focus() ;
    } else {
        if ( title == '' || title == 'undefinded' ) {
            alert('标题不能为空！');
            $title.focus() ;
        } else if ( name == '' || name == 'undefinded' ) {
            alert('姓名不能为空！');
            $name.focus() ;
        } else if ( phone == '' || phone == 'undefinded' ) {
            alert('手机不能为空！');
            $phone.focus() ;
        } else if ( qq == '' || qq == 'undefinded' ) {
            alert('QQ不能为空！');
            $qq.focus() ;
        } else {
            $.ajax({
                url  : './adviceServlet',
                type : 'post',
                data : {
                    title : title,
                    msg   : msg,
                    name  : name,
                    phone : phone,
                    qq    : qq,
                },
                cache    : false,
                dataType : 'json',
                success  : function(data) {
                    if ( data.result == true ) {
						alert('提供成功！\n请点击“确定”回到主页。') ;
                        location.href = 'index.html' ;
                    } else {
                        alert( '提交失败，请稍后尝试！' ) ;
                    }
                },
                error    : function() {
                    alert( '异常错误！' ) ;
                }
            }) ;
        }
    }
}

/**
 * 重置表单
 */
function reset() {
    $('#aTitle').val('') ;
    $('#aMsg').html('') ;
    $('#aName').val('') ;
    $('#aPhone').val('') ;
    $('#aQQ').val('') ;
    $('#aVerifyCode').val('') ;
    getverify() ;
}

function getverify() {
    $.ajax({
        url: './verifycodeServlet',
        type: 'post' ,
        dataType: 'json',
        success:function(data){
            if( data ) {
                verifycode = data.data ;
                verifypath = data.filepath ;
                $('#verifyImg').attr( 'src', verifypath ) ;
            } else {
                alert( '获取验证码失败！' ) ;
            }
        },
        error:function(){
            alert('获取验证码失败！') ;
        }
    });
}

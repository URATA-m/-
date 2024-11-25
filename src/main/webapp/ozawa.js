/**
 * ログインチェック用
 */

function check(){
	if(document. login. id. value==""){
		window.alert("ＩＤが未入力です。");
		return false;
	}else if(document. login. pass. value==""){
		window.alert("パスワードが未入力です。");
		return false;
	}
	return true;
}
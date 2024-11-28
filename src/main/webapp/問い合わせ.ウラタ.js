/**
 * 
 */
function check(){
	if(document. frm1. name. value==""){
		window.alert("お名前の項目が未入力です。");
		return false;
	}else if(document. frm1. ID. value==""){
		window.alert("会員IDの項目が未入力です。");
		return false;
	}else if(document. frm1. mail. value==""){
		window.alert("メールアドレスの項目が未入力です。");
		return false;
	}else if(document. frm1. mailcheck. value==""){
		window.alert("メールアドレス確認の項目が未入力です。");
		return false;
	}else if(document. frm1. comment. value==""){
		window.alert("お問い合わせ内容の項目が未入力です。");
		return false;
	}
	return true;
}

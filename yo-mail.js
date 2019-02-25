// ==UserScript==
// @name          Yo Mail
// @namespace     https://github.com/Yojka
// @version       190225
// @description   Тёмная тема для лёгкой Яндекс почты
// @author        Yojka
// @license       MIT
// @include       http://mail.yandex.ru/*
// @include       https://mail.yandex.ru/*
// @include       http://*.mail.yandex.ru/*
// @include       https://*.mail.yandex.ru/*
// @run-at        document-start
// @homepageURL   https://github.com/Yojka/userscripts
// @supportURL    https://github.com/Yojka/userscripts/issues
// @downloadURL   https://raw.githubusercontent.com/Yojka/userscripts/master/yo-mail.js
// @updateURL     https://raw.githubusercontent.com/Yojka/userscripts/master/yo-mail.js
// @grant         GM_addStyle
// ==/UserScript==
GM_addStyle(`
br,.b-label_important,.b-label_unread,.b-head-logo,.b-head-name_logo,.b-footer,.b-footer__col_left.b-footer__col,.b-footer__link_mobile.b-footer__link,.b-footer__block_links.b-footer__block,.b-footer__block_copyright.b-footer__block,.b-header__link_help.b-header__link,.b-mail-icon_important,.b-userpic,.b-pager__arr,.b-message-pager__arr,.b-pager__title{display:none!important}
.b-header{height:24px}
.b-header__link_setup,.b-header__right .b-head-user{margin:.3125em 10px 0!important;clear:none!important}
.b-stamp__logo{left:-12px!important}
.b-labels{border:0!important}
.b-footer{padding:0!important}
.b-layout__right{padding-bottom:0!important;background:#565656}
.b-layout__left{width:110px!important;left:-110px!important;margin:5px -220px 0 0 !important}
.b-layout{margin-top:0!important;padding-left:110px!important}
.b-folders{width:110px!important}
.b-header__link_exit{margin:.3125em 13px 0 1em !important}
.b-page,.b-head-tabs,.b-messages__message_thread{margin:0!important}
.b-header__middle{margin:0 300px 0 5px !important}
.b-header__right{width:auto}
.b-toolbar__col,.b-messages__message,.b-toolbar{border:0!important}
.b-statusline_type_error,.b-messages__thread-num,.b-folders__folder_current{background:#e40!important;color:#fff!important}
body{font:11pt Consolas;color:#a8a8a8;background:#565656}
a,p,h1,h2,h3,li,ul,div,textarea,input,form,.b-toolbar__but,.b-form-textarea,.b-pager__current{font-family:Consolas!important;font-size:11pt!important;font-weight:900!important}
.b-messages__message_thread{background:#525252}
.b-folders__folder__link,.b-messages__firstline,.b-messages__date,.b-message-head__person,.b-message-head__date,.b-message-head__field-name,.b-message-head__person{color:#a8a8a8!important;font-weight:900!important}
.b-messages__from,.b-messages__message__link,a.b-toolbar__but,.b-toolbar__but,.b-message-head__subject-text,.b-statusline{color:#fff!important}
.b-toolbar{background:#565656}
a:hover,a:visited,a:link,a:active,.b-user,.b-messages__from__text{text-decoration:none!important;color:#fff!important}
a:hover,.b-user__first-letter,a.b-toolbar__but:hover,.b-toolbar__but:hover,.b-messages__from__text:hover,.b-user:hover,.b-pager__current,a.b-pager__current:hover{color:#e40!important}
.b-folders__folder_current a:hover,.b-messages__thread-num:hover{color:#fff!important}
.b-folders__folder_current{border-radius:0 5px 5px 0!important}
input,textarea,select{background:none;border-color:#e40!important;border-radius:5px;border-width:2px;border-style:solid;color:#fff!important;font-weight:900!important}
input[placeholder],input::-moz-placeholder{color:#fff!important}
.b-message-pager{margin:0 0 10px!important}
.b-form-textarea{padding:5px!important}
.b-pager{margin:0!important;padding:0!important;position:absolute;right:-10px;overflow:hidden;display:block;width:200px;bottom:10px}
.b-search input{padding:0 5px!important;width:105px!important}
.b-toolbar__search{right:10px!important}
.b-folders__folder__num{font-size:100%!important;padding:3px 8px 2px 6px !important}
.b-message-pager__next_txt,.b-message-pager__prev_txt{text-decoration:none!important}
.b-pager__current,.b-messages__message_thread,.b-messages__thread-head{background:none!important}
.b-pager__pages{margin:auto;width:50%;text-align:center}
.b-pager{margin:0!important;padding:0!important;position:absolute;right:-10px;overflow:hidden;display:block;width:70%;bottom:10px}
.b-pager__links{float:right;overflow:hidden;display:block;margin-right:10px}
.b-message-head{padding:0!important;border-bottom:2px solid #e40!important}
`);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{305:function(t,e,s){t.exports=s.p+"assets/img/push-config.748c4b80.png"},306:function(t,e,s){t.exports=s.p+"assets/img/cer-download.10f70bbd.jpg"},307:function(t,e,s){t.exports=s.p+"assets/img/export-key.0536275c.png"},308:function(t,e,s){t.exports=s.p+"assets/img/confirm-push.729d91fb.png"},309:function(t,e,s){t.exports=s.p+"assets/img/push-admin.882e4217.png"},310:function(t,e,s){t.exports=s.p+"assets/img/push.141f3b19.jpg"},340:function(t,e,s){"use strict";s.r(e);var a=s(14),c=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"uni-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uni-app"}},[t._v("#")]),t._v(" UNI-APP")]),t._v(" "),e("h2",{attrs:{id:"_1-uni-app-打ios包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-uni-app-打ios包"}},[t._v("#")]),t._v(" 1. Uni-App 打ios包")]),t._v(" "),e("h3",{attrs:{id:"_1-1-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-准备工作"}},[t._v("#")]),t._v(" 1.1 准备工作")]),t._v(" "),e("ul",[e("li",[t._v("苹果开发者账号")]),t._v(" "),e("li",[t._v("Mac OS 10.9以上系统")])]),t._v(" "),e("h4",{attrs:{id:"登录开发者后台并操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录开发者后台并操作"}},[t._v("#")]),t._v(" 登录开发者后台并操作")]),t._v(" "),e("ul",[e("li",[t._v("打开ios"),e("a",{attrs:{href:"https://developer.apple.com/devcenter/ios/index.action",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发者后台系统"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("登录账号")]),t._v(" "),e("li",[t._v("找到 "),e("code",[t._v("Certificates,IDs & Profiles")])]),t._v(" "),e("li",[t._v("申请苹果App Id")])]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/ae9c05f4b59605cecf83cfd3b3aea5c5.png"}})]),t._v(" "),e("p",[e("strong",[t._v("选择标识类型为 “App IDs”，然后点击 “Continue”")])]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/e23230bc7d2db789ca656c042c584dd5.png"}})]),t._v(" "),e("p",[t._v("平台选择 “iOS，tvOS，watchOS”，Bundle ID 选择 “Explicit”，在 Description 中填写描述，然后填写 Bundle ID，Bundle ID 要保持唯一性，建议填写反域名加应用标识的格式 如：“io.dcloud.hellouniapp”， 然后点击 “Continue”"),e("br"),t._v(" "),e("strong",[t._v("注意：在 HBuilderX 中 App 提交云端打包时界面上的 AppID 栏填写的就是这个 Bundle ID")])]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/fd7f98a5285afd17c186bcd1a0dddcb1.png"}})]),t._v(" "),e("p",[t._v("接下来需要选择应用需要使用的服务（如需要使用到消息推送功能，则选择“Push Notifications”），然后点击 “Continue”\n"),e("strong",[t._v("注意：如果App用不到的服务一定不要勾选，以免响应审核")])]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/35b2007afc9e32009b6472d8358c6d2a.png"}})]),t._v(" "),e("p",[t._v("确认后选择提交，回到 identifiers 页面即可看到刚创建的App ID")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/f538bec2a6548e9366d3b4246245853d.png"}})]),t._v(" "),e("h3",{attrs:{id:"_1-2-生成证书请求文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-生成证书请求文件"}},[t._v("#")]),t._v(" 1.2 生成证书请求文件")]),t._v(" "),e("p",[t._v("在“Spltlight Search”中搜索“钥匙串”并打开 “钥匙串访问” 工具：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191113/4fb865746dce3a205287962cc9475934.png"}})]),t._v(" "),e("p",[t._v("打开菜单 “钥匙串访问”->“证书助理”，选择“从证书颁发机构请求证书...”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/890875c122389dcaec03850081acc65e.png"}})]),t._v(" "),e("p",[t._v("打开创建请求证书页面，在页面中输入用户邮件地址、常用名称，选择存储到磁盘，点击 “继续” ：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/0104f0b0456de72df5ae10dbec26ab99.png"}})]),t._v(" "),e("p",[t._v("文件名称为“CertificateSigningRequest.certSigningRequest”，选择保存位置，点击 “存储” 将证书请求文件保存到指定路径下，后面申请开发(Development)证书和发布(Production)证书时需要用到")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/0b6a336b56624d306da7625099a3db51.png"}})]),t._v(" "),e("h3",{attrs:{id:"_1-3-申请开发-development-证书和描述文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-申请开发-development-证书和描述文件"}},[t._v("#")]),t._v(" 1.3 申请开发(Development)证书和描述文件")]),t._v(" "),e("p",[t._v('在证书管理页面选择 “Certificates" 可查看到已申请的所有证书（TYPE：Development 为开发证书，Distribution为发布证书），点击页面的加号来创建一个新的证书：')]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/74051174ffd099862d2d28d5657d9e18.png"}})]),t._v(" "),e("p",[t._v("在 “Software” 栏下选中 “iOS App Development” 然后点击 “Continue”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/e07ae5f61ee512c71574e0c2a910d8b6.png"}})]),t._v(" "),e("p",[t._v("接下来需要用到刚刚生成的证书请求文件，点击“Choose File...”选择刚刚保存到本地的 “CertificateSigningRequest.certSigningRequest”文件，点击 “Continue” 生成证书文件：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/7b2e445496991680483c66eef460fb7d.png"}})]),t._v(" "),e("p",[t._v("生成证书后选择 “Download” 将证书下到本地 (ios_development.cer)：")]),t._v(" "),e("p",[t._v("双击保存到本地的 ios_development.cer 文件，会自动打开 “钥匙串访问” 工具说明导入证书成功，可以在证书列表中看到刚刚导入的证书，接下来需要导出 .p12 证书文件，选中导入的证书，右键选择 “导出...”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/bb24badaf2becb672559bc289494833f.png"}})]),t._v(" "),e("p",[e("font",{attrs:{color:"red"}},[e("strong",[t._v("出现无法导出.p12格式证书的问题  重新打开钥匙串切换到登录tab再双击导入")])])],1),t._v(" "),e("h4",{attrs:{id:"添加调试设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加调试设备"}},[t._v("#")]),t._v(" 添加调试设备")]),t._v(" "),e("p",[t._v("在证书管理页面选择 “Devices”，可查看到已添加的所有设备信息，点击页面上的加号来添加一个新设备：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/78882f6762f85cd392a69e0cea3fb7e1.png"}})]),t._v(" "),e("p",[t._v("填写设备名称 和 UDID（设备标识）：\n"),e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/b89afcb4f7da511cfb9767b9c79a4c29.png"}})]),t._v(" "),e("h4",{attrs:{id:"申请开发者描述文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#申请开发者描述文件"}},[t._v("#")]),t._v(" 申请开发者描述文件")]),t._v(" "),e("p",[t._v("这里要选择之前创建的 “App ID” (这里是“io.dcloud.hellouniapp”)，点击“Continue”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/e0dfd711b73264cc18cd551359f40a7e.png"}})]),t._v(" "),e("p",[t._v("这里要选择之前创建的 “App ID” (这里是“io.dcloud.hellouniapp”)，点击“Continue”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/10aacf646f0d14cf26751eba620ce4c2.png"}})]),t._v(" "),e("p",[t._v("接下来选择需要绑定的证书，这里建议直接勾选 “Select All”，点击“Continue”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/b3b64702a3cf4857c97047c7a3f54c92.png"}})]),t._v(" "),e("p",[t._v("选择授权调试设备，这里建议直接勾选 “Select All”，点击 “Continue”：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/80777452245069ebae852fc811b0956d.png"}})]),t._v(" "),e("p",[t._v("输入描述文件的名称（如“HelloUniAppProfile”）, 点击 “Generate” 生成描述文件：")]),t._v(" "),e("blockquote",[e("img",{attrs:{src:"https://ask.dcloud.net.cn/uploads/article/20191112/bbdbd61cb97195384e28098298e9d949.png"}})]),t._v(" "),e("h2",{attrs:{id:"_2-uni-app-接入推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-uni-app-接入推送"}},[t._v("#")]),t._v(" 2. Uni-App 接入推送")]),t._v(" "),e("h3",{attrs:{id:"_2-1-接入ios推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-接入ios推送"}},[t._v("#")]),t._v(" 2.1 接入IOS推送")]),t._v(" "),e("p",[t._v("首先打开开发者后台，找到 "),e("code",[t._v("Identifiers")]),t._v(" Tab 找到自己需要配置推送的App，点击后找到\n"),e("code",[t._v("Push Notifications")]),t._v("，点击"),e("code",[t._v("Configure")]),t._v("按钮.")]),t._v(" "),e("img",{attrs:{src:s(305)}}),t._v(" "),e("p",[t._v("生成开发版本的证书，需要上传之前生成的request文件。")]),t._v(" "),e("img",{staticClass:"view-img",attrs:{src:s(306)}}),t._v(" "),e("p",[t._v("生成证书后点击下载，之后双击证书用"),e("code",[t._v("钥匙串工具")]),t._v("导入证书。")]),t._v(" "),e("p",[t._v("导入成功后点击右键，导出"),e("code",[t._v(".p12")]),t._v("文件。"),e("br"),t._v(" "),e("img",{attrs:{src:s(307)}})]),t._v(" "),e("p",[t._v("在uniapp开发的项目里面 "),e("code",[t._v("manifest.json")]),t._v(" 中将App模块配置中的Push(消息推送)权限勾上，切记进行uniPush2.0这个是全系支持。")]),t._v(" "),e("img",{attrs:{src:s(308)}}),t._v(" "),e("p",[t._v("权限选择好之后，一定要重新创建基座，这样才能将Push功能打包进app中")]),t._v(" "),e("p",[t._v("接下来登录uni-app的后台，找到uni-push后台，点击2.0 -- 厂商推送设置")]),t._v(" "),e("img",{attrs:{src:s(309)}}),t._v(" "),e("p",[t._v("配置IOS的bundleid和服务空间。配置完成后点击消息推送，就可以发送消息推送了。")]),t._v(" "),e("img",{attrs:{src:s(310)}})])}),[],!1,null,null,null);e.default=c.exports}}]);
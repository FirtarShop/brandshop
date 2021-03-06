var config = require("wxc.config.js");

App({
    onLaunch: function () {
        var _this = this;
        _this.extConfig = wx.getExtConfigSync();
        wx.checkSession({
            success: function () {
                var sessionid = wx.getStorageSync("sessionid");
                var userid = wx.getStorageSync("userid");
                var userInfo = wx.getStorageSync("userInfo");
                if (sessionid != "" && userid != "" && userInfo) {
                    _this.globalData.openid = sessionid;
                    _this.globalData.userid = userid;
                    console.log("storage sessionid = ", sessionid, " and userid = ", userid);
                    _this.globalData.userInfo = userInfo;
                    console.log("storage userInfo : ", userInfo);
                } else {
                    console.log("缓存信息失效，重新登录获取用户信息！");
                    _this.wxloginwithsession();
                }
            },
            fail: function () {
                console.log("登录态已经过期，重新登录！");
                _this.wxloginwithsession();
            }
        });
    },
    wxloginwithsession: function () {
        var _this = this;
        wx.login({
            success: function (res) {
                if (res.code) {
                    console.log("code is " + res.code);
                    wx.request({
                        url: config.apiUrl + "/wxc/wxxcx/code2session.aspx",
                        method: "POST",
                        data: {
                            "jscode": res.code,
                            "appid": _this.extConfig.appid
                        },
                        success: function (o) {
                            if(o.data.status==0){
                                console.log("remote sessionid : ", o.data.data);
                                _this.globalData.openid = o.data.data;
                                wx.setStorage({
                                    key: "sessionid",
                                    data: o.data.data
                                });
                            }
                            else{
                                console.log("授权错误："+o.data.message);
                            }
                        },
                        fail: function (res) {
                        },
                        complete: function (res) {

                        }
                    });
                } else {
                    console.log("登录失败：" + res.errMsg);
                }
            }
        });
    },
    globalData: {
        openid: "",
        userid: 0,
        userInfo: null,
        rpxRatio: 1,
        score: 0,
        qIndex: 0,
        currentArticleUrl: "",
        currentVideoUrl: "",
        currentVideoPoster: "",
        currentSubtitle: "",
        currentIntro: "",
        currentAudioIndex: -1,
        orderInfo: {}
    }
});
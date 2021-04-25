import Mock from "mockjs";
import wechatImg from '@/assets/wechatImg.jpg'
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608306867,2361301082&fm=26&gp=0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/qizi70",
    qq: "1175883207",
    // qqQrCode:
    //   "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "weixin",
    weixinQrCode: wechatImg,
    mail: "1175883207@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "qizi70",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});

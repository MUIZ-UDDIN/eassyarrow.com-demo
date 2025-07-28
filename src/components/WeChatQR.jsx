import React from "react";
import { QRCodeSVG } from "qrcode.react";

const WeChatQR = () => {
  const wechatUrl = "https://u.wechat.com/MK0gOBE5EE_lNl8rJDDRHAs";

  return (
    <QRCodeSVG
      className="h-full w-full object-cover scale-120"
      value={wechatUrl}
      level="H"
      includeMargin={true}
    />
  );
};

export default WeChatQR;

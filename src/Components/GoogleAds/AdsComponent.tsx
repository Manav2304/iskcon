import React, { useEffect } from "react";

interface AdsComponentProps {
  dataAdSlot: string;
}

export const AdsComponent: React.FC<AdsComponentProps> = (props) => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error("Error pushing to adsbygoogle:", e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8315621572030521"
        data-ad-slot={dataAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

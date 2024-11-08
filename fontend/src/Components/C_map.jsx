import React from "react";

const C_map = () => {
  return (
    <div className="mt-[80px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.27472767464604!2d90.73599665021109!3d22.346158173768483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ab25135dc90d67%3A0xa2faa61af237087b!2sJahanara%20Market!5e0!3m2!1sen!2sbd!4v1717095377469!5m2!1sen!2sbd"
        width={1550}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default C_map;

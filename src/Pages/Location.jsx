import React from "react";

export default function Location() {
  return (
    <section className="space-y-4 mt-5">
      <h2 className="text-3xl font-semibold text-center text-primary">
        Our Location
      </h2>

      <div className="w-full h-96 rounded-2xl overflow-hidden shadow">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

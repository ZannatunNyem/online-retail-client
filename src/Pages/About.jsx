import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 text-primary">
      <section className="text-center space-y-6">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team banner"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <h1 className="text-4xl font-bold">About Our Company</h1>
        <p className="text-primary max-w-3xl mx-auto">
          We believe great products should be simple, reliable, and built to
          improve everyday life. Our journey started with a small idea: create
          quality experiences that customers can trust. Today, we proudly serve
          a growing community with dedication, transparency, and passion.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="Workspace"
          className="rounded-2xl shadow-lg"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="">
            What began as a small vision has grown into a customer-focused brand
            driven by innovation and care. From day one, our goal has been to
            deliver value — not just products, but meaningful service and
            long-term trust.
          </p>
          <p className="">
            Every decision we make is guided by quality, responsibility, and
            customer satisfaction.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Mission & Values</h2>
          <p className="">
            Our mission is to provide dependable products and exceptional
            service while building lasting relationships with our customers.
          </p>
          <ul className="list-disc list-inside  space-y-1">
            <li>Quality without compromise</li>
            <li>Honest communication</li>
            <li>Customer-first mindset</li>
            <li>Continuous improvement</li>
            <li>Innovation with purpose</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Collaboration"
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Products"
          className="rounded-2xl shadow-lg"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="">
            We combine thoughtful design, professional service, and attention to
            detail in everything we do. Our team works hard to ensure every
            customer experience is smooth, secure, and satisfying.
          </p>
          <p className="">
            When you choose us, you’re choosing reliability, care, and
            commitment.
          </p>
        </div>
      </section>

      <section className="text-center space-y-6">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Happy customers"
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
        <h2 className="text-3xl font-semibold">Looking Ahead</h2>
        <p className=" max-w-3xl mx-auto">
          As we grow, our promise remains the same: deliver excellence, earn
          trust, and keep improving. We’re excited for the future and grateful
          to have you as part of our journey.
        </p>
      </section>
    </div>
  );
}

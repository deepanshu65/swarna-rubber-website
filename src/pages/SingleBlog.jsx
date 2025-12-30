import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";

/* Temporary static data (replace with API later) */
const blogs = [
  {
    id: "1",
    title: "Importance of Rubber Seals in Industrial Applications",
    date: "March 12, 2025",
    image:
      "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1400&fit=crop",
    content: `
Rubber seals play a critical role in industrial applications by preventing leakage,
reducing vibration, and protecting equipment from dust, moisture, and chemicals.

In industries such as electrical, mechanical, construction, and rail transit,
high-quality rubber seals ensure safety, durability, and long-term performance.

At Swarna Rubber Industries, we manufacture seals using premium materials such as
EPDM, Silicone, Nitrile, and Neoprene, ensuring compliance with international
standards and customer specifications.

Choosing the right rubber seal not only increases equipment lifespan but also
reduces maintenance costs and downtime.
    `,
  },
  {
    id: "2",
    title: "EPDM vs Silicone Rubber: Which One to Choose?",
    date: "March 05, 2025",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&fit=crop",
    content: `
EPDM and Silicone rubber are two of the most widely used elastomers in industrial
applications.

EPDM rubber is known for its excellent resistance to weather, ozone, and UV exposure,
making it ideal for outdoor and automotive applications.

Silicone rubber, on the other hand, offers superior temperature resistance and
flexibility, making it suitable for medical, food-grade, and high-temperature
environments.

Understanding the operating conditions helps in selecting the right material.
    `,
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">

      {/* Hero Image */}
      <section className="relative h-[420px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <Link
              to="/blogs"
              className="inline-flex items-center text-sm mb-4 text-cyan-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center text-sm text-gray-200">
              <Calendar className="w-4 h-4 mr-2" />
              {blog.date}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">

          <article className="prose prose-lg max-w-none">
            {blog.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </article>

        </div>
      </section>

    </div>
  );
};
export default SingleBlog;
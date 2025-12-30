import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Importance of Rubber Seals in Industrial Applications",
    excerpt:
      "Rubber seals play a critical role in ensuring safety, durability, and efficiency across multiple industries.",
    image:
      "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&fit=crop",
    date: "March 12, 2025",
  },
  {
    id: 2,
    title: "EPDM vs Silicone Rubber: Which One to Choose?",
    excerpt:
      "Understanding the differences between EPDM and Silicone rubber can help you choose the right material.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&fit=crop",
    date: "March 05, 2025",
  },
  {
    id: 3,
    title: "How Quality Control Impacts Rubber Manufacturing",
    excerpt:
      "Strict quality control ensures consistency, reliability, and long product life in rubber components.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&fit=crop",
    date: "February 25, 2025",
  },
  {
    id: 4,
    title: "Applications of Rubber Seals in Rail & Transit Systems",
    excerpt:
      "Rail and metro systems require high-performance rubber sealing solutions for safety and comfort.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&fit=crop",
    date: "February 10, 2025",
  },
];

const Blogs = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-cyan-100 text-lg max-w-3xl mx-auto">
            Insights, industry knowledge, and updates from Swarna Rubber
            Industries.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blog.date}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {blog.excerpt}
                </p>

               <Link to={`/blogs/${blog.id}`} className="inline-flex items-center text-cyan-600 font-semibold" > Read More </Link>
                 </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Blogs;

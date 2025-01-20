import Container from "@/components/shared/Container";
import { Mail, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="py-10 md:py-40 text-white flex items-center justify-center">
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact me!</h1>
            <p className="text-base md:text-lg mb-6">
              Have any questions? Fill out the form and I’ll get you a response
              soon!
            </p>
            <p className="mb-4">
              Feel free to ask/inquire about anything (school, basketball,
              internships, music, etc.). Hoping to be a resource and help in
              your journey in any way possible.
            </p>
            <p className="mb-6">
              Similarly, please use this form or email me directly if your
              message regards a NIL opportunity.
            </p>
            <a
              href="mailto:kylerpadilla_business@gmail.com"
              className="text-sm md:text-lg font-semibold underline"
            >
              kylerpadilla_business@gmail.com
            </a>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Mail className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-200" />
              <Twitter className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-200" />
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-200" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-black text-sm font-semibold mb-1">
                    First Name <span className="text-red-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                    placeholder="Name..."
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-black text-sm font-semibold mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Last name..."
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm text-black font-semibold mb-1">
                  Email <span className="text-red-500">(required)</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                  placeholder="Email..."
                />
              </div>

              {/* Checkbox Section */}
              <div>
                <label className="block text-black text-sm font-semibold mb-1">
                  Which are you?{" "}
                  <span className="text-red-500">(required)</span>
                </label>
                <div className="flex flex-wrap gap-4 text-black">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox border-gray-300"
                    />
                    Student
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox border-gray-300"
                    />
                    Recruiter
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox border-gray-300"
                    />
                    Company (NIL)
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox border-gray-300"
                    />
                    Other
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-black text-sm font-semibold mb-1">
                  Message <span className="text-red-500">(required)</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                  placeholder="Message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

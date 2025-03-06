import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const SiriAnimation = () => {
  return (
    <motion.div
      className="relative mx-auto mb-10 h-32 w-32 rounded-full bg-black"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
    >
      {/* Glowing Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 opacity-50 blur-xl animate-pulse"></div>
      </div>
      {/* Inner Waves */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="h-24 w-24 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 opacity-80 blur-lg"></div>
      </motion.div>
      {/* Light Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-white opacity-90 blur-md"></div>
      </div>
    </motion.div>
  );
};
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Header */}
      {/* <motion.header
        className="bg-gray-800 text-white border-b border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-purple-400"
            whileHover={{ scale: 1.05 }}
          >
            AutoDraft AI
          </motion.h1>
          <nav>
            <motion.ul
              className="flex space-x-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </motion.li>
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  About
                </a>
              </motion.li>
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </div>
      </motion.header> */}
      <motion.header
        className="bg-gray-800 text-white border-b border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-purple-400"
            whileHover={{ scale: 1.05 }}
          >
            AutoDraft AI
          </motion.h1>
          <nav className="flex items-center">
            <motion.ul
              className="flex space-x-6 mr-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </motion.li>
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  About
                </a>
              </motion.li>
              <motion.li variants={itemFadeIn}>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </motion.li>
            </motion.ul>
            <motion.div
              className="flex space-x-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemFadeIn}>
                <Link
                  to={"/login"}
                  className="px-4 py-2 rounded-lg text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-gray-900 transition-colors duration-300"
                >
                  Log in
                </Link>
              </motion.div>
              <motion.div variants={itemFadeIn}>
                <Link
                  to={"/signup"}
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  Sign up
                </Link>
              </motion.div>
            </motion.div>
          </nav>
        </div>
      </motion.header>
      {/* Hero Section */}
      {/* <motion.section
        className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            College Permission Letters Made Easy
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Generate professional permission request letters for your college
            needs in seconds with our AI-powered platform.
          </motion.p>
          <motion.div variants={buttonHover} initial="rest" whileHover="hover">
            <Link
              href="/generate"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition shadow-lg"
            >
              Create Your Letter <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section> */}
      <motion.section
        className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <SiriAnimation />
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            College Permission Letters Made Easy
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Generate professional permission request letters for your college
            needs in seconds with our AI-powered platform.
          </motion.p>
          <motion.div initial="rest" whileHover="hover">
            <a
              href="/letter"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition shadow-lg"
            >
              Create Your Letter
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* College Details Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            College Details
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
              variants={itemFadeIn}
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Academic Permissions
              </h3>
              <p className="text-gray-300">
                Generate letters for exam deferrals, assignment extensions, and
                special academic accommodations.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
              variants={itemFadeIn}
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Event Permissions
              </h3>
              <p className="text-gray-300">
                Create requests for organizing events, workshops, seminars, and
                cultural activities on campus.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600"
              variants={itemFadeIn}
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Leave Applications
              </h3>
              <p className="text-gray-300">
                Draft professional leave applications for medical, personal, or
                family emergencies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center" variants={itemFadeIn}>
              <motion.div
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1, backgroundColor: "#9333ea" }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                Enter Details
              </h3>
              <p className="text-gray-400">
                Provide your college information and permission requirements
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemFadeIn}>
              <motion.div
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1, backgroundColor: "#9333ea" }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                AI Generation
              </h3>
              <p className="text-gray-400">
                Our AI crafts a professional and persuasive letter
              </p>
            </motion.div>
            <motion.div className="text-center" variants={itemFadeIn}>
              <motion.div
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1, backgroundColor: "#9333ea" }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                Download & Submit
              </h3>
              <p className="text-gray-400">
                Download your letter, make any edits, and submit to your college
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
            >
              <Link
                to={"/letter"}
                className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-purple-700 transition shadow-lg"
              >
                Generate Your Letter Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-12 mt-auto border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                AutoDraft AI
              </h3>
              <p className="text-gray-400">
                Making college permission requests simple and professional with
                AI-powered letter generation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                Quick Links
              </h3>
              <motion.ul
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemFadeIn}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Home
                  </a>
                </motion.li>
                <motion.li variants={itemFadeIn}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Generate Letter
                  </a>
                </motion.li>
                <motion.li variants={itemFadeIn}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    About Us
                  </a>
                </motion.li>
                <motion.li variants={itemFadeIn}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition"
                  >
                    Privacy Policy
                  </a>
                </motion.li>
              </motion.ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                Contact Us
              </h3>
              <p className="text-gray-400 mb-2">Email: info@autodraftai.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <motion.div
                className="flex space-x-4 mt-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition"
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition"
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition"
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} AutoDraft AI. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

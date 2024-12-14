/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import Slider from "react-slick"; // Import Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ayurveda from "../assets/ayurveda.jpg";
import yoga from "../assets/yoga.jpeg";
import BarChartHome from "../components/charts/BarChartHome";
import { LuClipboardSignature } from "react-icons/lu";
import { FaClock, FaShieldAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import homeimg from "../assets/slide1.jpg";
import homeimg2 from "../assets/slide2.jpg";
import MarqueeItem from "../components/MarqueeItem";
import mii from "../assets/mii.png";
import data_gov from "../assets/data_gov.png";
import go_web from "../assets/go_web.png";
import national_service from "../assets/national_service.png";
import ayush_ministry from "../assets/ayush_ministry.png";
import digital_india from "../assets/digital_india.png";
import pm_gati from "../assets/pm_gati.png";
import ayurveda_icon from "../assets/ayurveda_icon.png";
import homeopathy_icon from "../assets/homeopathy_icon.png";
import unani from "../assets/unani.png";
import yoga_icon from "../assets/yoga.png";
import sidha_icon from "../assets/sidha_icon.png";
import sowa_rigpa from "../assets/sowa_rigpa.png";
import thumbnail1 from "../assets/THUMBNAIL1.jpg";
import thumbnail2 from "../assets/THUMBNAIL2.jpg";
import thumbnail3 from "../assets/THUMBNAIL3.jpg";
import thumbnail4 from "../assets/THUMBNAIL4.jpg";
import thumbnail5 from "../assets/THUMBNAIL5.jpg";
import showcase1 from "../assets/showcase1.jpg";
import showcase2 from "../assets/showcase2.jpg";
import showcase3 from "../assets/showcase3.jpg";
import showcase4 from "../assets/showcase4.jpeg";

const sectors = [
  {
    name: "Ayurveda",
    icon: ayurveda_icon,
    iconType: "image",
    color: "bg-[#55ed55]",
  },
  { name: "Yoga", icon: yoga_icon, iconType: "image", color: "bg-[#fcfc6d]" },
  { name: "Unani", icon: unani, iconType: "image", color: "bg-[#ff8093]" },
  { name: "Sidha", icon: sidha_icon, iconType: "image", color: "bg-[#ffb574]" },
  {
    name: "Homeopathy",
    icon: homeopathy_icon,
    iconType: "image",
    color: "bg-[#65c5e5]",
  },
  {
    name: "Sowa-Rigpa",
    icon: sowa_rigpa,
    iconType: "image",
    color: "bg-[#598fd7]",
  },
];

const portalFeatures = [
  {
    title: "Streamlined Registration",
    description: "Simplified application process.",
    icon: <LuClipboardSignature />,
  },
  {
    title: "Real-Time Tracking",
    description: "Monitor your application status.",
    icon: <FaClock />,
  },
  {
    title: "Secure Document Upload",
    description: "Safely upload and manage your documents with encryption.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Resource Hub",
    description: "Access to guidelines, documents, and support.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Multilingual Support",
    description: "Available in multiple languages for wider accessibility.",
    icon: <GrLanguage />,
  },
];

const marqueeList = [
  mii,
  data_gov,
  go_web,
  national_service,
  ayush_ministry,
  digital_india,
  pm_gati,
];

const latestUpdates = [
  {
    id: 1,
    message: "AYUSH Ministry announces new funding opportunities for startups.",
    date: new Date("2024-09-22").toLocaleDateString(),
  },
  {
    id: 2,
    message:
      'Webinar on "Best Practices for Startup Registration" scheduled for October.',
    date: new Date("2024-09-24").toLocaleDateString(),
  },
  {
    id: 3,
    message:
      "New guidelines for AYUSH startups released. Check the resource hub for details.",
    date: new Date("2024-09-20").toLocaleDateString(),
  },
  {
    id: 4,
    message:
      "Multilingual chatbot support added for better user accessibility.",
    date: new Date("2024-09-18").toLocaleDateString(),
  },
  {
    id: 5,
    message: "Real-time tracking feature now live for all registered startups.",
    date: new Date("2024-09-15").toLocaleDateString(),
  },
  {
    id: 6,
    message:
      "New guidelines for AYUSH startups released. Check the resource hub for details.",
    date: new Date("2024-09-20").toLocaleDateString(),
  },
  {
    id: 7,
    message:
      "Multilingual chatbot support added for better user accessibility.",
    date: new Date("2024-09-18").toLocaleDateString(),
  },
];

const userTestimonials = [
  {
    id: 1,
    message:
      "The AYUSH startup portal made it so easy to track my application status. A seamless experience!",
    user: "Rajesh K.",
  },
  {
    id: 2,
    message:
      "Very impressed with the multilingual support. It made navigating the process much simpler.",
    user: "Aisha P.",
  },
  {
    id: 3,
    message:
      "The real-time updates were a lifesaver. I knew exactly where my application was at every step.",
    user: "Sandeep M.",
  },
  {
    id: 4,
    message:
      "Secure document upload feature gave me peace of mind. I trust the system completely.",
    user: "Pooja S.",
  },
  {
    id: 5,
    message:
      "An intuitive interface that’s perfect for non-tech users like me. Highly recommended!",
    user: "Naveen R.",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "How AYUSH Startups Are Transforming Healthcare",
    description:
      "Discover how AYUSH startups are driving innovation in alternative healthcare.",
    thumbnail: thumbnail1,
    link: "/blog/ayush-healthcare-transform",
  },
  {
    id: 2,
    title: "Funding Opportunities for AYUSH Entrepreneurs",
    description: "Explore new funding options available for AYUSH startups.",
    thumbnail: thumbnail2,
    link: "/blog/ayush-funding-opportunities",
  },
  {
    id: 3,
    title: "AYUSH Ministry’s New Guidelines for Startups",
    description:
      "Learn about the latest guidelines set by the AYUSH Ministry for new startups.",
    thumbnail: thumbnail3,
    link: "/blog/ayush-guidelines",
  },
  {
    id: 4,
    title: "Success Stories from the AYUSH Startup Ecosystem",
    description:
      "Read inspiring success stories of entrepreneurs in the AYUSH sector.",
    thumbnail: thumbnail4,
    link: "/blog/ayush-success-stories",
  },
  {
    id: 5,
    title: "Webinar: Best Practices for Startup Registration",
    description:
      "Join our upcoming webinar to learn how to streamline your registration process.",
    thumbnail: thumbnail5,
    link: "/blog/webinar-startup-registration",
  },
];

const HomeContent = () => {
  const testimonialsRef = useRef();

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-[25%] cursor-pointer bg-transparent z-10"
        onClick={onClick}
      >
        <svg width="40" height="40" fill="white" className="opacity-50">
          <polygon points="10,0 10,40 40,20" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-[25%] cursor-pointer bg-transparent z-10"
        onClick={onClick}
      >
        <svg width="40" height="40" fill="white" className="opacity-50">
          <polygon points="40,0 40,40 10,20" />
        </svg>
      </div>
    );
  };

  const slides = [
    {
      heading: "Empower Your AYUSH Startup Journey",
      subtext:
        "AYUSH startups are redefining the future of healthcare by blending traditional wisdom with modern innovations. Our platform is dedicated to empowering you to bring your ideas to life. Register your startup today, navigate a seamless onboarding process, and access valuable resources that will help shape your entrepreneurial journey from idea to execution.",
      buttonText: "Register Now",
      buttonLink: "/register",
      image: ayurveda,
    },
    {
      heading: "Real-Time Status Tracking",
      subtext:
        "We understand the importance of staying informed throughout the registration process. With our real-time status tracking system, you can easily monitor each step of your application. Receive live updates and notifications, ensuring that you are always aware of any actions required or progress made. No more delays or uncertainty — stay ahead with our transparent and efficient tracking system.",
      buttonText: "Track Your Status",
      buttonLink: "/track-status",
      image: homeimg2,
    },
    {
      heading: "Access Resources and Funding Opportunities",
      subtext:
        "Starting a business requires not only passion but also the right knowledge and support. Our resource hub is designed to equip you with everything you need to succeed, including guidelines for startup registration, access to funding opportunities tailored for AYUSH entrepreneurs, and expert advice on overcoming challenges in the early stages of your venture. Take advantage of this invaluable knowledge base and secure the future of your startup.",
      buttonText: "Explore Resources",
      buttonLink: "/resources",
      image: homeimg,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="h-full">
      {/* Slider */}
      <div className="relative h-[75vh] overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[20%] left-1/3 -translate-x-1/3 z-50 flex flex-col gap-y-5">
                <h1 className="text-5xl font-bold whitespace-nowrap">
                  {slide.heading}
                </h1>
                <p className="text-xl w-3/4">{slide.subtext}</p>
                <button className="w-fit btn-primary bg-violet-800 text-white">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About */}
      <div className="w-full bg-violet-50 p-6">
        <div className="w-[65%] mx-auto my-6 flex justify-center items-center gap-x-10">
          <img
            src={ayurveda}
            alt="ayush_about"
            className="w-[36rem] h-[20rem] border-l-[30px] border-b-[30px] border-violet-500/70 shadow-lg"
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="relative welcomeText before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-0 before:translate-x-0 before:bg-violet-500">
              About AYUSH Startup Portal
            </h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident consequatur sunt repellat reprehenderit voluptatem,
              nesciunt consequuntur incidunt neque unde doloremque, excepturi
              quis.
            </p>
            <button className="btn-secondary w-fit">read more</button>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="w-full my-[3rem]">
        <div className="w-[75%] mx-auto flex justify-center mt-12">
          {portalFeatures.map((feature, i) => (
            <div
              className={`flex flex-col gap-y-2 items-center text-center ${
                i % 2 !== 0 ? "pt-36" : "mt-0"
              }`}
              key={i}
            >
              <i className="text-4xl text-yellow-400">{feature.icon}</i>
              <div>
                <h1 className="text-2xl text-violet-800 font-bold whitespace-nowrap">
                  {feature.title}
                </h1>
                <p className="font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AYUSH Sectors */}
      <div className="w-full p-6 bg-violet-50">
        <div className="w-[75%] mx-auto my-12 flex flex-col justify-center items-center gap-y-10">
          <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-28 before:h-1 before:-bottom-2 before:left-0 before:translate-x-0 before:bg-violet-500">
            AYUSH Startup Sectors
          </h1>
          <div className="grid grid-cols-3 gap-10">
            {sectors.map((sector, i) => (
              <div
                className="relative w-[25rem] h-auto shadow-md flex flex-col p-4 bg-white rounded-md"
                key={i}
              >
                <div
                  className={`w-full h-32 flex items-center justify-center rounded-md ${sector.color}`}
                >
                  {sector.iconType === "image" ? (
                    <img src={sector.icon} alt="icon" className="size-20" />
                  ) : (
                    sector.icon
                  )}
                </div>
                <div className="text-center py-3 font-semibold text-xl">
                  <span>{sector.name}</span>
                </div>
                <button className="btn-primary bg-violet-800 hover:bg-violet-900 absolute top-6 right-6 px-2">
                  register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="w-full px-[4rem] py-6 flex gap-x-20">
        <div className="grid grid-cols-2 grid-rows-2 basis-7/12 gap-3">
          <img src={showcase1} alt="img1" className="w-[40rem] h-[20rem]" />
          <img src={showcase2} alt="img2" className="w-[40rem] h-[20rem]" />
          <img src={showcase3} alt="img3" className="w-[40rem] h-[20rem]" />
          <img src={showcase4} alt="img4" className="w-[40rem] h-[20rem]" />
        </div>
        <div className="bg-violet-500/70 basis-5/12">
          <h1 className="relative welcomeText text-left px-5 py-3 text-white before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-0 before:left-5 before:translate-x-0 before:bg-yellow-200">
            Latest Updates
          </h1>
          <div className="w-full h-[30rem] mx-auto mt-8 p-3 flex flex-col gap-y-4 overflow-y-hidden bg-white">
            {/* Sample updates */}
            {latestUpdates.map((update, i) => (
              <div
                key={i}
                className="bg-violet-50 px-4 py-2 rounded shadow-md flex flex-col items-start animate-scroll-Y"
              >
                <p className="text-gray-700 mt-1 text-lg">{update.message}</p>
                <p className="text-gray-500 mt-1 font-bold">
                  Date: {update.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-Y {
          display: flex;
          flex-direction: column;
          animation: scroll-Y 5s linear infinite; /* Slower scroll */
        }

        @keyframes scroll-Y {
          0% {
            transform: translateY(20%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>

      {/* News and Blogs */}
      <div className="w-full px-6 py-[6rem] bg-gray-100">
        <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-[45.5%] before:translate-x-[-45.5%]  before:bg-violet-500">
          News and Blogs
        </h1>
        <div className="w-[75%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample blog posts with thumbnails */}
          {blogPosts.map((blog, i) => (
            <div
              key={i}
              className="bg-white flex flex-col justify-between p-4 rounded-md shadow-md"
            >
              <img
                src={blog.thumbnail}
                alt={`Thumbnail ${i + 1}`}
                className="mb-2 w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700 h-[3rem]">{blog.description}</p>
              <button className="btn-primary mt-2">Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* User Testimonials */}
      <div className="w-full p-6 bg-violet-500/70 text-white relative">
        <h1 className="relative welcomeText text-center before:absolute before:content-[''] before:w-24 before:h-1 before:-bottom-2 before:left-[44.5%] before:translate-x-[-44.5%] before:bg-yellow-200 mb-6">
          User Testimonials
        </h1>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-l-full"
        >
          &#10094;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-r-full"
        >
          &#10095;
        </button>
        <div className="overflow-hidden">
          <div
            ref={testimonialsRef}
            className="whitespace-nowrap animate-scroll"
          >
            {/* User testimonials */}
            {userTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-md shadow-md text-gray-800 mx-2 w-30 h-38 flex flex-col justify-center"
              >
                <p className="flex-grow text-lg">
                  &quot;{testimonial.message}&quot;
                </p>
                <p className="font-semibold mt-2">— {testimonial.user}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 60s linear infinite; /* Slower scroll */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* Trends and Charts */}
      <div className="flex items-center justify-center p-6 shadow-xl">
        <BarChartHome />
      </div>

      {/* Associate Govs */}
      <div className="container mx-auto my-6 flex justify-center items-center gap-x-3 overflow-hidden">
        <MarqueeItem images={marqueeList} from={0} to={"-100%"} />
      </div>
    </section>
  );
};

export default HomeContent;

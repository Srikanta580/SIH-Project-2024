// /* eslint-disable react/no-unescaped-entities */
// import { useNavigate } from "react-router-dom";
// import AYUSH from "/src/assets/AYUSH transparent.png";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleNavigation = (section) => {
//     document.getElementById(section).scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={styles.container}>

//       <div style={styles.navbar}>
//         <img src={AYUSH} alt="AYUSH Logo" style={styles.logo} />
//         <div style={styles.navLinks}>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("ayush")}
//           >
//             AYUSH
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("ayurveda")}
//           >
//             AYURVEDA
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("yoga")}
//           >
//             YOGA & NATUROPATHY
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("unani")}
//           >
//             UNANI
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("siddha")}
//           >
//             SIDDHA
//           </button>
//           <button
//             style={styles.navButton}
//             onClick={() => handleNavigation("homeopathy")}
//           >
//             HOMEOPATHY
//           </button>
//         </div>
//         <button style={styles.loginButton} onClick={handleLoginClick}>
//           LOGIN
//         </button>
//       </div>

//       <div id="ayush" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>
//             Embracing Holistic Healing: The AYUSH Approach
//           </h1>
//           <p style={styles.paragraph}>
//             AYUSH, an acronym for Ayurveda, Yoga & Naturopathy, Unani, Siddha,
//             and Homoeopathy, represents a diverse and harmonious approach to
//             health and wellness rooted in ancient traditions. This integrative
//             system of medicine emphasizes a holistic perspective, addressing not
//             just physical ailments but also mental and spiritual well-being. By
//             blending time-honored practices—such as the balance of doshas in
//             Ayurveda, the mind-body connection in Yoga, the humoral balance in
//             Unani, the elemental harmony in Siddha, and the principle of "like
//             cures like" in Homoeopathy—AYUSH offers a comprehensive framework
//             for achieving optimal health. Its personalized and preventive
//             strategies are designed to promote overall harmony, encouraging
//             individuals to live in balance with themselves and their
//             environment.
//           </p>
//           <button style={styles.joinButton} onClick={handleLoginClick}>
//             Join
//           </button>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/uploads/20220831134439/AyushGridProject-660x330.jpg"
//             alt="AYUSH"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="ayurveda" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://images.mid-day.com/images/images/2024/jan/ayurvedickidneytreatment1_d.jpg"
//             alt="Ayurveda"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Ayurveda</h1>
//           <p style={styles.paragraph}>
//             Ayurveda, a traditional system of medicine originating in ancient
//             India, focuses on achieving harmony between the body, mind, and
//             spirit to maintain health and treat illness. It operates on the
//             principle that health is governed by the balance of three
//             doshas—Vata, Pitta, and Kapha. Ayurvedic treatments include
//             personalized diet plans, herbal remedies, yoga, and lifestyle
//             adjustments designed to restore balance and promote overall
//             well-being. This holistic approach aims to address the root causes
//             of health issues rather than just alleviating symptoms.
//           </p>
//         </div>
//       </div>

//       <div id="yoga" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Yoga & Naturopathy</h1>
//           <p style={styles.paragraph}>
//             Yoga is an ancient practice that integrates physical postures,
//             breathing exercises, meditation, and ethical disciplines to promote
//             physical and mental health. It aims to harmonize the body and mind,
//             enhance flexibility, and reduce stress. Naturopathy complements yoga
//             by emphasizing natural healing methods, including diet, exercise,
//             and herbal therapies, to support the body's innate ability to heal
//             itself. Together, these practices focus on fostering a holistic
//             approach to health that emphasizes prevention and self-care.
//           </p>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://vuniversity.in/wp-content/uploads/2023/09/School-of-Yoga-and-Naturopathy.png"
//             alt="Yoga & Naturopathy"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="unani" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://www.theherbaltreatment.com/wp-content/uploads/2019/05/Herbal-Medicine-630x367.jpg"
//             alt="Unani"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Unani</h1>
//           <p style={styles.paragraph}>
//             Unani medicine, which has its roots in ancient Greece and was
//             refined in the Arab world, is a holistic system that emphasizes the
//             balance of the body's four humors—blood, phlegm, yellow bile, and
//             black bile. Treatments in Unani medicine involve the use of herbal
//             medicines, dietary recommendations, and lifestyle changes to restore
//             and maintain this balance. Unani practitioners aim to address the
//             underlying causes of illness by considering the individual's overall
//             health, environment, and emotional state, thereby promoting a
//             comprehensive approach to healing.
//           </p>
//         </div>
//       </div>

//       <div id="siddha" style={styles.content}>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Siddha</h1>
//           <p style={styles.paragraph}>
//             Siddha medicine, originating in Tamil Nadu, India, is one of the
//             oldest traditional healing systems in the Indian subcontinent. It
//             encompasses a wide range of therapeutic practices, including herbal
//             remedies, dietary guidelines, and spiritual techniques, to balance
//             the body's elements and energies. Siddha philosophy emphasizes the
//             interconnectedness of the body, mind, and environment, and seeks to
//             treat both physical and mental ailments by restoring balance and
//             harmony. It also incorporates unique diagnostic methods, such as
//             pulse reading and observation of bodily signs.
//           </p>
//         </div>
//         <div style={styles.photoBox}>
//           <img
//             src="https://www.thehealthsite.com/wp-content/uploads/2022/05/siddha.jpg"
//             alt="Siddha"
//             style={styles.photo}
//           />
//         </div>
//       </div>

//       <div id="homeopathy" style={styles.content}>
//         <div style={styles.photoBox}>
//           <img
//             src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/homoeopathy-1710497484.jpg"
//             alt="Homoeopathy"
//             style={styles.photo}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h1 style={styles.heading}>Homoeopathy</h1>
//           <p style={styles.paragraph}>
//             Homoeopathy is a system of medicine based on the principle of "like
//             cures like," where substances that cause symptoms in healthy
//             individuals are used in highly diluted forms to treat similar
//             symptoms in sick individuals. Founded by Samuel Hahnemann in the
//             late 18th century, homoeopathy aims to stimulate the body's vital
//             force to heal itself. Treatments are individualized and focus on the
//             totality of the patient's symptoms and overall well-being, rather
//             than just addressing specific diseases. This approach emphasizes
//             gentle, non-invasive remedies and considers both physical and
//             emotional aspects of health.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100vh",
//     fontFamily: '"Roboto", sans-serif',
//   },
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "15px 30px",
//     backgroundColor: "#ad92eda9",
//     color: "#fff",
//     position: "fixed",
//     width: "100%",
//     top: 0,
//     zIndex: 1000,
//   },
//   logo: {
//     height: "70px",
//     width: "auto",
//   },
//   navLinks: {
//     display: "flex",
//     justifyContent: "space-between",
//     flex: 1,
//     margin: "0 30px",
//   },
//   navButton: {
//     background: "none",
//     border: "none",
//     color: "#000",
//     fontSize: "16px",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     cursor: "pointer",
//     padding: "10px 15px",
//     transition: "color 0.3s",
//   },
//   navButtonHover: {
//     color: "#fff",
//   },
//   loginButton: {
//     backgroundColor: "#8b5cf6",
//     border: "none",
//     borderRadius: "5px",
//     color: "#fff",
//     padding: "12px 24px",
//     cursor: "pointer",
//     fontSize: "18px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "background-color 0.3s, box-shadow 0.3s",
//   },
//   content: {
//     flex: 1,
//     display: "flex",
//     alignItems: "center",
//     padding: "50px 50px",
//     gap: "20px",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     marginTop: "70px",
//   },
//   textContent: {
//     flex: 1,
//     maxWidth: "50%",
//     textAlign: "left",
//     paddingRight: "20px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   heading: {
//     fontSize: "32px",
//     margin: "0 0 20px 0",
//     color: "#333",
//   },
//   paragraph: {
//     fontSize: "18px",
//     color: "#555",
//     lineHeight: "1.6",
//     margin: "0 0 20px 0",
//   },
//   photoBox: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingLeft: "20px",
//   },
//   photo: {
//     width: "100%",
//     maxWidth: "800px",
//     height: "auto",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   joinButton: {
//     backgroundColor: "#8b5cf6",
//     border: "none",
//     borderRadius: "5px",
//     color: "#fff",
//     width: "90px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "16px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//     transition: "background-color 0.3s, box-shadow 0.3s",
//     textAlign: "center",
//   },
// };

// export default Home;
import React, { useEffect, useState } from "react";
import AYUSH from "/src/assets/AYUSH transparent.png";
import india from "/src/assets/india.png";
import DropdownLang from "../components/Header/DropdownLang";
import { Link, NavLink, Outlet } from "react-router-dom";

const navKeys = `w-[2rem] text-base hover:text-[1.05rem] transition-all ease-in-out duration-300 cursor-pointer`;
// const activeLink = `bg-gray-50`;

const Home = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About AYUSH", path: "/about" },
    { name: "Startup Registration", path: "/new-registration" },
    { name: "Application Status", path: "/user/status" },
    {
      name: "Resources",
      path: "/resources",
      dropdown: [
        { name: "Guidelines", path: "/resources/guidelines" },
        { name: "Templates", path: "/resources/templates" },
        { name: "Tutorials", path: "/resources/tutorials" },
      ],
    },
    {
      name: "Funding",
      path: "/funding",
      dropdown: [
        { name: "Grants", path: "/funding/grants" },
        { name: "Loans", path: "/funding/loans" },
        { name: "Investors", path: "/funding/investors" },
      ],
    },
    {
      name: "Events & Workshops",
      path: "/events",
      dropdown: [
        { name: "Upcoming Events", path: "/events/upcoming" },
        { name: "Webinars", path: "/events/webinars" },
        { name: "Workshops", path: "/events/workshops" },
      ],
    },
    { name: "Help Center", path: "/help" },
    { name: "User Dashboard", path: "/user" },
  ];

  const [isNavFixed, setNavFixed] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  //navbar fixed at top
  const fixNav = () => {
    if (window.scrollY > 150) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index); // Set the index of the dropdown to open
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null); // Close the dropdown when mouse leaves
  };

  return (
    <div className="overflow-x-hidden">
      <nav className="flex flex-col">
        {/* topnav */}
        <div className="flex justify-center items-center bg-violet-500/70 p-2">
          <div className="w-[90vw] mx-auto flex justify-between capitalize">
            {/* government icon */}
            <div className="basis-[60%] flex justify-start items-center gap-x-2 font-medium cursor-pointer">
              <img src={india} alt="indian_icon" className="size-7 shadow-md" />{" "}
              |<span>भारत सरकार |</span>
              <span>Government of India</span>
            </div>
            {/* nav keys */}
            <div className="flex basis-[40%] justify-end gap-x-6 items-center font-medium">
              <p className={`${navKeys} mr-5`}>sitemap</p>|
              <div className="flex justify-center items-center">
                <p className={navKeys}>A-</p>
                <p className={navKeys}>A</p>
                <p className={navKeys}>A+</p>
              </div>
              |
              <DropdownLang />
              {/* signup login btns */}
              <Link
                to="/signup"
                className="px-4 py-1 bg-violet-800 rounded text-white capitalize hover:bg-violet-900 transition-all ease-in-out duration-300"
              >
                register
              </Link>
              <Link
                to="/login"
                className="px-4 py-1 bg-violet-800 rounded text-white capitalize hover:bg-violet-900 transition-all ease-in-out duration-300"
              >
                login
              </Link>
            </div>
          </div>
        </div>
        {/* midnav */}
        <div
          className={`flex justify-center gap-x-10 items-center w-[90vw] mx-auto ${
            isNavFixed
              ? "fixed top-0 w-full mx-auto bg-violet-500 z-50 shadow-lg transition ease-in-out py-1.5"
              : "py-3"
          }`}
        >
          <img src={AYUSH} alt="ayush_logo" className="w-44 h-20" />
          <h1 className="text-2xl font-semibold">AYUSH Startup Portal</h1>
          <div className="flex-1 flex justify-center items-center">
            <ul className="flex items-center gap-x-10 font-normal">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isNavFixed
                          ? "text-white hover:border-b-2 hover:border-yellow-200"
                          : "hover:text-violet-500"
                      } ${
                        isActive
                          ? `${
                              isNavFixed
                                ? "border-b-2 border-yellow-200 text-white"
                                : "border-b-2 border-violet-500 text-violet-500/70"
                            }`
                          : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.dropdown && openDropdown === index && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex} className="hover:bg-gray-100">
                          <NavLink
                            to={dropdownItem.path}
                            className={({ isActive }) =>
                              `hover:text-violet-500 block px-4 py-2 ${
                                isActive ? "text-violet-500/70" : ""
                              }`
                            }
                          >
                            {dropdownItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* endniv */}
        <div className="flex justify-center items-center shadow-md py-2 border-t border-violet-200">
          <div className="w-[50%] mx-auto">
            <form className="flex-1">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full py-1.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 outline-none"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="absolute end-1 top-[0.20rem] bg-violet-800 rounded text-white hover:bg-violet-900 px-3 py-1 text-sm"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <main className="h-auto overflow-x-hidden">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-center text-neutral-100 lg:text-left">
        <div className="flex items-center justify-center border-b border-gray-100/70 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div className="flex justify-center">
            <a className="mr-6 text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a className="mr-6 text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a className="mr-6 text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a className="mr-6 text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a className="mr-6  text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a className=" text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW Elements section --> */}
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                AYUSH Startup Portal
              </h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ullam minus perspiciatis? Iste vel, quaerat, at minima molestias
                voluptas perferendis cum architecto dolore, dolorem repellendus.
              </p>
            </div>
            {/* <!-- Products section --> */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <a className=" text-neutral-200">Angular</a>
              </p>
              <p className="mb-4">
                <a className=" text-neutral-200">React</a>
              </p>
              <p className="mb-4">
                <a className=" text-neutral-200">Vue</a>
              </p>
              <p>
                <a className=" text-neutral-200">Laravel</a>
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a className=" text-neutral-200">Pricing</a>
              </p>
              <p className="mb-4">
                <a className=" text-neutral-200">Settings</a>
              </p>
              <p className="mb-4">
                <a className=" text-neutral-200">Orders</a>
              </p>
              <p>
                <a className=" text-neutral-200">Help</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                New Delhi, INDIA
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-slate-900 p-6 text-center">
          <span>© 2024 Copyright: </span>
          <a
            className="font-semibold  text-neutral-400"
            href="https://tw-elements.com/"
          >
            Ministry of AYUSH | AYUSH Startup Portal
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

import event1 from './assets/events/event1/1.png'
import event2 from './assets/events/event1/2.png'
import event3 from './assets/events/event1/3.png'
import { FaUsers, FaFilm, FaStar } from "react-icons/fa";
import raghav from './assets/artists/raghav_juyal.jpg'
import remo from './assets/artists/remo.jpg'
import dharmesh from './assets/artists/dharmesh.jpg'
import mukti from './assets/artists/mukti.jpg'
import vartika from './assets/artists/vartika.jpg'
import vaishnavi from './assets/artists/vaishnavi.jpg'
import pooja from './assets/artists/pooja.jpg'
import lopa from './assets/artists/lopa.jpg'
import tushar from './assets/artists/tushar.jpg'
import rahul from './assets/artists/rahul.jpg'
import kunwar from './assets/artists/kunwar.jpg'
import sushant from './assets/artists/sushant.jpg'
import teriya from './assets/artists/teriya.jpg'
import rupesh from './assets/artists/rupesh.jpg'
import rutuja from './assets/artists/rutuja.jpg'
import rohan from './assets/artists/rohan.jpg'
import kunal from './assets/artists/kunal.jpg'
import pratik from './assets/artists/pratik.jpg'
import fahman from './assets/artists/fahman.jpg'
import vinti from './assets/artists/vinti.jpg'
import aamna from './assets/artists/aamna.jpg'
import alisha from './assets/artists/alisha.jpg'
import shweta from './assets/artists/shweta.jpg'
import akash from './assets/artists/akash.jpg'
import varun from './assets/artists/varun.jpg'
import sunita from './assets/artists/sunita.jpg'
import khushi from './assets/artists/khushi.jpg'
import parvathy from './assets/artists/parvathi.jpg'
import sreerama from './assets/artists/sreerama.jpg'
import rohit from './assets/artists/rohit.jpg'
import sonia from './assets/artists/sonia singer.jpg'
import rik from './assets/artists/rik.jpg'
import shahid from './assets/artists/shahid.jpg'




import client1 from "./assets/clients/image copy.png";
import client2 from "./assets/clients/image copy 2.png";
import client3 from "./assets/clients/image copy 3.png";
import client4 from "./assets/clients/image copy 4.png";
import client5 from "./assets/clients/image copy 5.png";
import client6 from "./assets/clients/image copy 6.png";
import client7 from "./assets/clients/image copy 7.png";
import client8 from "./assets/clients/image copy 8.png";
import client9 from "./assets/clients/image copy 9.png";
import client10 from "./assets/clients/image copy 10.png";
import client11 from "./assets/clients/image copy 11.png";
import client12 from "./assets/clients/image copy 12.png";
import client13 from "./assets/clients/image copy 13.png";
import client14 from "./assets/clients/image copy 14.png";
import client15 from "./assets/clients/image copy 15.png";
import client16 from "./assets/clients/image copy 16.png";
import client17 from "./assets/clients/image copy 17.png";
import client18 from "./assets/clients/image copy 18.png";

import Carousel from "./components/Carousel";
import ArtistSwiper from "./components/ArtistSwiper";
import HorizontalCards from "./components/HorizontalCards";

export default function Home() {
  const clients = [
    client8, client1, client2, client3, client4, client5, client6,
    client7, client18, client9, client10, client11, client12,
    client13, client14, client15, client16, client17,
  ];

  const items = [
    {
      id: 1,
      title: "Raghav Juyal",
      followers: "13M",
      ig: "https://www.instagram.com/raghavjuyal/",
      youtube: "",
      twitter: "",
      facebook: "",
      img: raghav
    },
    {
      id: 2,
      title: "Remo Dsouza",
      followers: "12.9M",
      ig: "https://www.instagram.com/remodsouza/",
      youtube: "https://www.youtube.com/@OfficialRemoDsouza",
      twitter: "https://x.com/remodsouza?t=eCJ6uKlzIOPlUXLbWfpz-g&s=08",
      facebook: "",
      img: remo
    },
    {
      id: 3,
      title: "Dharmesh Yelande",
      followers: "4.5M",
      ig: "https://www.instagram.com/dharmesh0011/",
      youtube: "",
      twitter: "",
      facebook: "",
      img: dharmesh
    },
    {
      id: 4,
      title: "Mukti Mohan",
      followers: "2.8M",
      ig: "https://www.instagram.com/muktimohan/",
      youtube: "https://youtube.com/@muktimanch?si=W0V6AVMIwo2PNUpL",
      twitter: "https://x.com/thisIsMukti?t=DCthEbIcziONMJLRaHYP_Q&s=08",
      facebook: "https://www.facebook.com/real.mukti/",
      img: mukti
    },
    {
      id: 5,
      title: "Vartika Jha",
      followers: "2M",
      ig: "https://www.instagram.com/jhavartika/",
      youtube: "https://www.youtube.com/@jhavartika",
      twitter: "",
      facebook: "",
      img: vartika
    },
    {
      id: 6,
      title: "Vaishnavi Patil",
      followers: "1.1M",
      ig: "https://www.instagram.com/vaishnavi_official_/",
      youtube: "https://www.youtube.com/@worldofvaishnavi",
      twitter: "",
      facebook: "",
      img: vaishnavi
    },
    {
      id: 7,
      title: "Pooja Banerjee",
      followers: "1.1M",
      ig: "https://www.instagram.com/poojabanerjeee/",
      youtube: "https://www.youtube.com/@Pooja_Banerjee",
      twitter: "https://x.com/PoojaBanerjee08?t=8z38fSiFqNbt3-AbUZwB3g&s=08",
      facebook: "https://www.facebook.com/share/1CbwzrVzzw/",
      img: pooja
    },
    {
      id: 8,
      title: "Lopamudra Raut",
      followers: "1.6M",
      ig: "https://www.instagram.com/lopamudraraut/",
      youtube: "",
      twitter: "https://x.com/iLopamudraRaut?t=IUrCmU41QI5vFvLaZsDM-w&s=08",
      facebook: "https://www.facebook.com/share/17Qae3tosA/",
      img: lopa
    },
    // {
    //   id: 9,
    //   title: "Shakti Mohan",
    //   followers: "17.3M",
    //   ig: "https://www.instagram.com/mohanshakti/",
    //   youtube: "https://youtube.com/@nrityashakti?si=5hBa0xdzsrBlF-g9",
    //   twitter: "https://x.com/MohanShakti?t=h9HeUMjF8or18shtjc_bMg&s=08",
    //   facebook: "https://www.facebook.com/share/1FuwUai6c5/",
    //   img: shakti
    // },
    {
      id: 10,
      title: "Tushar Kalia",
      followers: "885K",
      ig: "https://www.instagram.com/thetusharkalia/",
      youtube: "https://youtube.com/@tusharkaliaofficial6199?si=8OG4zgN6lDgHy7fQ",
      twitter: "",
      facebook: "https://www.facebook.com/share/1BtbF9QK9b/",
      img: tushar
    },
    {
      id: 11,
      title: "Rahul Shetty",
      followers: "629K",
      ig: "https://www.instagram.com/rahuldid/",
      youtube: "https://www.youtube.com/@rahulshettydv",
      twitter: "",
      facebook: "https://www.facebook.com/share/16k3YktCYH/",
      img: rahul
    },
    {
      id: 12,
      title: "Kunwar Amar",
      followers: "789K",
      ig: "https://www.instagram.com/kunwar08/",
      youtube: "https://www.youtube.com/@itskunwaramar16",
      twitter: "https://x.com/kunwar_amar16?t=d_EMPv2VdRCAW2__OXKADA&s=08",
      facebook: "https://www.facebook.com/share/1HMRgkMopR/",
      img: kunwar
    },
    {
      id: 13,
      title: "Sushant Pujari",
      followers: "481K",
      ig: "https://www.instagram.com/sushi1983/",
      youtube: "",
      twitter: "https://x.com/sushantgm0?t=0dvF-1ui1iBWeTL20Vk52g&s=08",
      facebook: "https://www.facebook.com/share/19owL2V3pk/",
      img: sushant
    },
    {
      id: 14,
      title: "Teriya Magar",
      followers: "322K",
      ig: "https://www.instagram.com/teriya_phounja_magar/",
      youtube: "https://youtube.com/@teriyaphounja6493?si=QJvOvpf47vrA-iHi",
      twitter: "",
      facebook: "",
      img: teriya
    },
    {
      id: 15,
      title: "Rupesh Bane",
      followers: "238K",
      ig: "https://www.instagram.com/rupeshbane_0011/",
      youtube: "https://youtube.com/@rupeshbane8?si=fPxr6hBrvTtykqVt",
      twitter: "https://x.com/banerupesh0011?t=CUu5MTDQMORjOspXxuLQ6g&s=08",
      facebook: "https://www.facebook.com/rupesh.bane0011/",
      img: rupesh
    },
    {
      id: 16,
      title: "Rutuja Junnarkar",
      followers: "123K",
      ig: "https://www.instagram.com/rutuja.junnarkar/",
      youtube: "https://youtube.com/@rutujajunnarkar6790?si=xqtt80xabqGc-AsL",
      twitter: "",
      facebook: "",
      img: rutuja
    },
    {
      id: 17,
      title: "Rohan Parkale",
      followers: "105K",
      ig: "https://www.instagram.com/ratherberohan/",
      youtube: "https://www.youtube.com/rohanparkale",
      twitter: "https://x.com/slowisrohan?t=sjxG9Gd4129EV1gUFyxp6w&s=08",
      facebook: "https://www.facebook.com/rohanparkaleofficial/?ref=_xav_ig_profile_page_web#",
      img: rohan
    },
    {
      id: 18,
      title: "Kunal Thakur",
      followers: "83.5K",
      ig: "https://www.instagram.com/whokunalthakur/",
      youtube: "",
      twitter: "https://x.com/whokunalthakur?t=p3INErK-MYJe_vDs8yXmsw&s=08",
      facebook: "https://www.facebook.com/m.me.whokunalthakurr/",
      img: kunal
    },
    {
      id: 19,
      title: "Pratik Surve",
      followers: "11.1K",
      ig: "https://www.instagram.com/pratiksurve_26/",
      youtube: "https://youtube.com/@pratiksurve26.5?si=pR0kjNlMwWH_YXjb",
      twitter: "",
      facebook: "",
      img: pratik
    },
    {
      id: 20,
      title: "Fahman Khan",
      followers: "627K",
      ig: "https://www.instagram.com/fahmaankhan/",
      youtube: "https://www.youtube.com/@FahmaankhanFK",
      twitter: "https://x.com/fahmaankhan?t=oTOmA0gvYvr4iT8WHK5xIQ&s=08",
      facebook: "",
      img: fahman
    },
    // {
    //   id: 21,
    //   title: "Aashim Gulati",
    //   followers: "203K",
    //   ig: "https://www.instagram.com/aashimgulati/",
    //   youtube: "",
    //   twitter: "",
    //   facebook: "",
    //   img: aashim
    // },
    {
      id: 22,
      title: "Vinti Adnani",
      followers: "42.3K",
      ig: "https://www.instagram.com/vintiidnani/",
      youtube: "",
      twitter: "",
      facebook: "https://www.facebook.com/share/16m1dWvJEu/",
      img: vinti
    },
    {
      id: 23,
      title: "Aamna Sharif",
      followers: "3M",
      ig: "https://www.instagram.com/aamnasharifofficial/",
      youtube: "",
      twitter: "https://x.com/aamnashariff_16?t=nJ87Bhk2rvcQzPalCGr3DA&s=08",
      facebook: "https://www.facebook.com/share/1BnDUYo2m2/",
      img: aamna
    },
    {
      id: 24,
      title: "Alisha Singh",
      followers: "373K",
      ig: "https://www.instagram.com/alishasingh.official/",
      youtube: "https://youtube.com/@alishasingh05?si=PrBsrP4Tc5BF_3dI",
      twitter: "https://x.com/AlishaSofficial?t=9EyceS_c1NBHbh4WT_fWsw&s=08",
      facebook: "https://www.facebook.com/share/14LLYfwfhqx/",
      img: alisha
    },
    {
      id: 25,
      title: "Shweta Sharda",
      followers: "589K",
      ig: "https://www.instagram.com/shwetasharda24/",
      youtube: "https://youtube.com/@shwetasharda7419?si=QlPA96hKWEmAeOGU",
      twitter: "",
      facebook: "",
      img: shweta
    },
    {
      id: 26,
      title: "Akash Jagga",
      followers: "115K",
      ig: "https://www.instagram.com/akashrjagga/",
      youtube: "https://youtube.com/@akashrjagga?si=6yT4g5VXZcPE8XgE",
      twitter: "",
      facebook: "https://www.facebook.com/akash.jagga.98/",
      img: akash
    },
    {
      id: 27,
      title: "Varun Mitra",
      followers: "91.4K",
      ig: "https://www.instagram.com/varun.mitra/",
      youtube: "https://youtube.com/@varunmitra1490?si=E5VPh9Fpf89U9FP-",
      twitter: "https://x.com/varunmitra19?t=pHieU_04TEFzDdowhTIO-g&s=08",
      facebook: "https://www.facebook.com/share/1EkNJn48Fk/",
      img: varun
    },
    {
      id: 28,
      title: "Sunita Gogoi",
      followers: "1.5M",
      ig: "https://www.instagram.com/sunitagogoi_offl/",
      youtube: "https://youtube.com/@sunitaxpress?si=IJHdao_wvCLiPbPA",
      twitter: "",
      facebook: "https://www.facebook.com/share/17DjY39HLG/",
      img: sunita
    },
    {
      id: 29,
      title: "Khushi Dubey",
      followers: "1.3M",
      ig: "https://www.instagram.com/_khushidubey_/ ",
      youtube: "https://youtube.com/@_khushidubey_?si=LV2pAMo1yaNgg7wq",
      twitter: "",
      facebook: "",
      img: khushi
    },
    {
      id: 30,
      title: "Parvathy Omanakuttan",
      followers: "60.2K",
      ig: "https://www.instagram.com/parvathyo13/",
      youtube: "",
      twitter: "https://x.com/ParvathyO_1303?t=Hf-tNV4kWQv55y3wu4XM_w&s=08",
      facebook: "",
      img: parvathy
    },
    {
      id: 31,
      title: "Sreerama Chandra",
      followers: "763K",
      ig: "https://www.instagram.com/sreeramachandra5/",
      youtube: "https://youtube.com/@sreeramachandraofficial?si=42aHIuHoznthFOAT",
      twitter: "https://x.com/Sreeram_singer?t=rqfdebohsAKkbC657X3PCg&s=08",
      facebook: "https://www.facebook.com/share/17cJfsaAvZ/",
      img: sreerama
    },
    {
      id: 32,
      title: "Rohit Khandelwal",
      followers: "773K",
      ig: "https://www.instagram.com/rohit_khandelwal77/",
      youtube: "",
      twitter: "",
      facebook: "https://www.facebook.com/share/17ivRsF7ds/",
      img: rohit
    },
    {
      id: 33,
      title: "Sonia Gazmer",
      followers: "28K",
      ig: "https://www.instagram.com/sonia_gazmer_official/",
      youtube: "https://youtube.com/@soniagazmer?si=XEOQziBTf8m4ql2m",
      twitter: "",
      facebook: "https://www.facebook.com/share/1BiNJSGT6S/",
      img: sonia
    },
    {
      id: 34,
      title: "Rik Basu",
      followers: "130K",
      ig: "https://www.instagram.com/rikbasuchiku/",
      youtube: "https://youtube.com/@rik-basu?si=pdv15Z6P18hcRZCN",
      twitter: "",
      facebook: "https://www.facebook.com/share/17drTANE2c/",
      img: rik
    },
    {
      id: 35,
      title: "Shahid Mallya",
      followers: "934K",
      ig: "https://www.instagram.com/shahidmallya/",
      youtube: "",
      twitter: "https://x.com/shahidmaliya?t=Hl3uikpIB_LbwYkZq4bZew&s=08",
      facebook: "https://www.facebook.com/share/1D8eumEMNR/",
      img: shahid
    }
  ];

  return (
    <div
      id="home"
      className="relative text-white bg-gradient-to-b from-black via-[#0a001a] to-[#1a0033] overflow-hidden"
    >



      {/* <div id="home" className="relative z-10 flex flex-col items-center justify-center  px-1 sm:px-10 md:px-16 lg:px-24 text-center mt-40">

        {/* ===========================
          FULL-WIDTH RESPONSIVE CAROUSEL
        ============================= */}
      <div className="relative pt-20 mt-10 w-full h-[100vh] sm:h-[85vh] md:h-[90vh] overflow-hidden">

        <Carousel
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
        />
      </div>

      {/* ===========================
              WHO WE ARE SECTION
        ============================= */}
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl w-full text-left bg-white/5 border border-fuchsia-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 mb-4 text-center">
            Who We Are
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
            <p className="text-gray-300 leading-relaxed">
              Founded in <strong>2012</strong>, Blue Orchid Entertainment is a
              <span className="text-cyan-300 font-semibold"> multidisciplinary powerhouse</span> in India’s entertainment landscape.
              We’ve produced live experiences, films, and shows that have reached audiences across
              <strong> India, Africa, and the Middle East</strong>.
            </p>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>🎭 Talent Management</li>
              <li>🎥 Film & TV Production</li>
              <li>🎉 Event Execution</li>
              <li>📣 Brand Promotion</li>
            </ul>
          </div>
        </motion.div> */}

      {/* ===========================
              SERVICES SECTION
        ============================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
    grid 
    grid-cols-1         /* Mobile: single column */
    sm:grid-cols-2      /* Small devices: two columns */
    md:grid-cols-3      /* Medium+ devices: three columns */
    gap-6 
    w-full 
    max-w-6xl 
    px-4                /* Mobile padding */
    mx-auto
    pt-10
  "
        id="talent"
      >
        <QuickLink
          title="Talent Management"
          desc="We represent India’s most dynamic performing artists."
          link="/#talent"
        />
        <QuickLink
          title="Film & TV Productions"
          desc="Transforming ideas into cinematic brilliance."
          link="/productions"
        />
        <QuickLink
          title="Live Events"
          desc="We execute concerts, conferences & award shows worldwide."
          link="/events"
        />
      </motion.div>



      {/* artists  */}

      <h3 className="text-2xl mt-8 sm:text-3xl font-bold text-cyan-300 mb-10 text-center drop-shadow-[0_0_10px_#22d3ee]">
        Talent Management
      </h3>

      {/* <ArtistSwiper/> */}
      <div className="p-2"><HorizontalCards items={items} /></div>

      {/* ===========================
           CLIENTS INFINITE SLIDER
        ============================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-full overflow-hidden py-10"
        id="talent"
      >
        <h6 className="text-2xl mt-8 sm:text-3xl font-bold text-cyan-300 mb-10 text-center drop-shadow-[0_0_10px_#22d3ee]">
          Our Client's
        </h6>

        <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#0a001a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#0a001a] to-transparent z-10"></div>

        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-10 sm:space-x-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index}`}
                className="h-10 sm:h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <h3 id ="productions"className="text-2xl mt-8 sm:text-3xl font-bold text-cyan-300 mb-10 text-center drop-shadow-[0_0_10px_#22d3ee]">
        Events and Ip's
      </h3>


      <div className="
  w-full flex flex-wrap justify-center items-center gap-20 p-2
  rounded-2xl bg-blue/50 backdrop-blur-xl border border-white/20 shadow-lg
">




        <img src={event1} className="h-96  object-contain" alt="" />
        <img src={event2} className="h-96  object-contain" alt="" />
        <img src={event3} className="h-96 object-contain" alt="" />
      </div>

      {/* ===========================
             HIGHLIGHTS VIDEOS
        ============================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-6xl text-center"
      >
           <h3 id ="productions"className="text-2xl mt-8 sm:text-3xl font-bold text-cyan-300 mb-10 text-center drop-shadow-[0_0_10px_#22d3ee]">
       Events
      </h3>

        <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-12">
          <YouTubeEmbed videoId="e8VThAFeZOI" title="Holi Celebration 2023" />
          <YouTubeEmbed videoId="jchcsRg_hTY" title="31st Dec 2023 Event" />
        </div>
      </motion.div>
      {/* </div> */}
    </div>
  );
}

/* ========= REUSABLE COMPONENTS ========= */

function QuickLink({ icon, title, desc, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      className="bg-white/20 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-fuchsia-500/30 transition-all my-3"
    >
      {icon}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </motion.a>
  );
}

function YouTubeEmbed({ videoId, title }) {
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[220px] sm:h-[250px] bg-black rounded-xl overflow-hidden shadow-lg border border-white/10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
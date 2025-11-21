import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { useArtistImages } from "../hooks/useArtistImages";
// import artists from "../data/artists.json";
import img1 from '../assets/artists/raghav_juyal.jpg'
export default function ArtistSwiper() {


        const artists =

        [
            {
              "name": "Remo Dsouza",
              "slug": "remo_dsouza",
              "image": "../assets/artists/remo.jpg",
              "followers": "12.9M",
              "instagram": "https://www.instagram.com/remodsouza/",
              "youtube": "https://www.youtube.com/@OfficialRemoDsouza",
              "twitter": "https://x.com/remodsouza?t=eCJ6uKlzIOPlUXLbWfpQAg&s=09",
              "facebook": null
            },
            {
              "name": "Dharmesh Yelande",
              "slug": "dharmesh_yelande",
              "image": "dharmesh_yelande.jpg",
              "followers": "4.5M",
              "instagram": "https://www.instagram.com/dharmesh0011/",
              "youtube": null,
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Mukti Mohan",
              "slug": "mukti_mohan",
              "image": "mukti_mohan.jpg",
              "followers": "2.8M",
              "instagram": "https://www.instagram.com/muktimohan/",
              "youtube": "https://youtube.com/@muktimanch?si=W0V6AVMIwo2rE6cJ",
              "twitter": "https://x.com/thisIsMukti?t=DCthEbIcziONMJLRaHTDJQ&s=09",
              "facebook": "https://www.facebook.com/real.mukti/"
            },
            {
              "name": "Vartika Jha",
              "slug": "vartika_jha",
              "image": "vartika_jha.jpg",
              "followers": "2M",
              "instagram": "https://www.instagram.com/jhavartika/",
              "youtube": "https://www.youtube.com/@jhavartika",
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Sushant Khatri",
              "slug": "sushant_khatri",
              "image": "sushant_khatri.jpg",
              "followers": "1.7M",
              "instagram": "https://www.instagram.com/sushant_khatri/",
              "youtube": "https://www.youtube.com/@sushantkhatri7",
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Pratik Utekar",
              "slug": "pratik_utekar",
              "image": "pratik_utekar.jpg",
              "followers": "1.4M",
              "instagram": "https://www.instagram.com/pratikutekar/",
              "youtube": null,
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Punit J Pathak",
              "slug": "punit_j_pathak",
              "image": "punit_j_pathak.jpg",
              "followers": "1.3M",
              "instagram": "https://www.instagram.com/punitjpathakofficial/",
              "youtube": "https://www.youtube.com/@PunitJPathak",
              "twitter": "https://x.com/punitjpathak?t=fowJqVY8sqmGGK_QUKFOeQ&s=09",
              "facebook": null
            },
            {
              "name": "Bir Radha Sherpa",
              "slug": "bir_radha_sherpa",
              "image": "bir_radha_sherpa.jpg",
              "followers": "1.1M",
              "instagram": "https://www.instagram.com/birradhsherpa/",
              "youtube": "https://www.youtube.com/@BirRadhaSherpa",
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Sagar Bora",
              "slug": "sagar_bora",
              "image": "sagar_bora.jpg",
              "followers": "908k",
              "instagram": "https://www.instagram.com/sagarbora/",
              "youtube": "https://www.youtube.com/@SagarBora",
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Om Prakash Mishra",
              "slug": "om_prakash_mishra",
              "image": "om_prakash_mishra.jpg",
              "followers": "864k",
              "instagram": "https://www.instagram.com/opmishra05/",
              "youtube": "https://www.youtube.com/@Opmishra",
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Swarali Karulkar",
              "slug": "swarali_karulkar",
              "image": "swarali_karulkar.jpg",
              "followers": "500k",
              "instagram": "https://www.instagram.com/swaraliofficial/",
              "youtube": null,
              "twitter": null,
              "facebook": null
            },
            {
              "name": "Anjali Mamgai",
              "slug": "anjali_mamgai",
              "image": "anjali_mamgai.jpg",
              "followers": "216k",
              "instagram": "https://www.instagram.com/iamanjalimamgai/",
              "youtube": null,
              "twitter": null,
              "facebook": "https://www.facebook.com/share/1D8eumEMNR/"
            },

            {
              "name": "Raghav juyal",
              "slug": "raghav_juyal",
              "image": img1,
              "followers": "13M",
              "instagram": "https://www.instagram.com/raghavjuyal/",
              "youtube": null,
              "twitter": null,
              "facebook": null
            },
          ]


  const images = useArtistImages();
  const [cards, setCards] = useState(artists);

  const handleSwipe = () => {
    setCards(prev => prev.slice(1)); // removes top card
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm h-[75vh]">
        {cards.map((artist, index) => (
          <SwipeCard
            key={artist.slug}
            artist={artist}
            image={artist.image}
            onSwipe={handleSwipe}
          />
        ))}
      </div>
    </div>
  );
}

function SwipeCard({ artist, image, onSwipe }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-180, 180], [-20, 20]);

  return (
    <motion.div
      drag="x"
      style={{ x, rotate }}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 120 || info.offset.x < -120) {
          onSwipe();
        }
      }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-white"
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover"
      />

      {/* Social Links Floating */}
      <div className="absolute bottom-3 left-3 flex gap-3">
        {artist.instagram && (
          <a
            href={artist.instagram}
            target="_blank"
            className="px-3 py-1 bg-pink-600 text-white text-sm rounded"
          >
            Instagram
          </a>
        )}
        {artist.youtube && (
          <a
            href={artist.youtube}
            target="_blank"
            className="px-3 py-1 bg-red-600 text-white text-sm rounded"
          >
            YouTube
          </a>
        )}
        {artist.twitter && (
          <a
            href={artist.twitter}
            target="_blank"
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded"
          >
            X
          </a>
        )}
      </div>
    </motion.div>
  );
}
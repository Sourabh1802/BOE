import ArtistCards from "./components/ArtistCards";


export default function HeroArtists() {
  return (
    <div className="mt-10">
      <ArtistCards data={artistsData} />
      
    </div>
  );
}
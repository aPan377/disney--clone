import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [
    {
      id: 1,
      title: "Turning Red",
      genre: "Animation, Kids & Family",
      description:
        "A confident, dorky 13-year-old torn between staying her mother’s dutiful daughter and the chaos of adolescence. Her protective, if not slightly overbearing mother, Ming (voice of Sandra Oh), is never far from her daughter—an unfortunate reality for the teenager. And as if changes to her interests, relationships and body weren’t enough, whenever she gets too excited (which is practically ALWAYS), she “poofs” into a giant red panda!",
      source: "/images/turning-red-movie.jpg",
    },
    {
      id: 2,
      title: "Coco",
      genre: "Animation, Family, Fantasy, Musical",
      description:
        "a boy who dreams of becoming a great musician embarks on a journey to uncover the mysteries behind his ancestor’s stories and traditions.",
      source: "/images/coco-movie.jpg",
    },
    {
      id: 3,
      title: "Elemental",
      genre: "Animation, Family, Fantasy, Musical",
      description:
        "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy are about to discover something elemental: How much they actually have in common",
      source: "/images/elemental-movie.jpg",
    },
    {
      id: 4,
      title: "LightYear",
      genre: "Animation, Family, Fantasy, Musical",
      description:
        "“Lightyear” follows the legendary space ranger on an intergalactic adventure alongside ambitious recruits, Izzy, Mo and Darby, and his robot companion Sox. As this motley crew embark on their toughest mission yet, they must learn to work as a team to escape the evil Zurg and his dutiful robot army who are never far behind",
      source: "/images/lightyear-movie.jpg",
    },
    {
      id: 5,
      title: "Luca",
      genre: "Animation, Family, Fantasy, Musical",
      description:
        "Luca (voice of Jacob Tremblay) shares these adventures with his newfound best friend, Alberto (voice of Jack Dylan Grazer), but all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface",
      source: "/images/luca-movie.jpg",
    },
    {
      id: 6,
      title: "Onward",
      genre: "Animation, Family, Fantasy, Musical",
      description:
        "Two teenage elf brothers Ian and Barley Lightfoot (voices of Tom Holland and Chris Pratt) get an unexpected opportunity to spend one more day with their late dad and embark on an extraordinary quest aboard Barley’s epic van Guinevere. Like any good quest, their journey is filled with magic spells, cryptic maps, impossible obstacles, and unimaginable discoveries. But when the boys’ fearless mom Laurel (voice of Julia Louis-Dreyfus) realizes that her sons are missing, she teams up with a part-lion, part-bat, part-scorpion, former warrior – aka The Manticore (voice of Octavia Spencer) – and heads off to find them",
      source: "/images/onward-movie.jpg",
    },
  ],
  reducers: {},
});

export default moviesSlice.reducer;

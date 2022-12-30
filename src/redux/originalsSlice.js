import { createSlice } from "@reduxjs/toolkit";

const originalsSlice = createSlice({
  name: "originals",
  initialState: [
    {
      id: 1,
      title: "Among The Stars",
      genre: "Documentary",
      description:
        "The series starts with astronaut Captain Chris Cassidy on a quest to get back in his space suit for one last mission - to fly to The International Space Station and help find the origins of the universe, but this quickly becomes a tale of the wider team at NASA, their roles on this mission and collective quest to succeed. With cameras stationed on both Earth and the International Space Station, using intimate footage, personal video diaries and livestream footage, viewers are embedded with Cassidy and the team of engineers, flight controllers and specialists who take on missions risking life, limb and reputation for the greater good of humankind. Join them as their missions unfold",
      source: "/images/among-the-stars-originals.jpg",
    },
    {
      id: 2,
      title: "Andor",
      genre: "Action, Adventure, Science Fiction",
      description:
        "The “Andor” series will explore a new perspective from the Star Wars galaxy, focusing on Cassian Andor’s journey to discover the difference he can make. The series brings forward the tale of the burgeoning rebellion against the Empire and how people and planets became involved. It’s an era filled with danger, deception and intrigue where Cassian will embark on the path that is destined to turn him into a rebel hero",
      source: "/images/andor-originals.jpg",
    },
    {
      id: 3,
      title: "Baymax",
      genre: "Animation, Comedy, Family, Science Fiction",
      description:
        "Walt Disney Animation Studios’ “Baymax!” returns to the fantastical city of San Fransokyo where the affable, inflatable, inimitable healthcare companion, Baymax (voice of Scott Adsit), sets out to do what he was programmed to do: help others",
      source: "/images/baymax-originals.jpg",
    },
    {
      id: 4,
      title: "Dug Days",
      genre: "Animation, Comedy, Family",
      description:
        "Pixar Animation Studios’ “Dug Days” is a new collection of shorts that follows the humorous misadventures of Dug, the lovable dog from Disney and Pixar’s “Up.” Each short features everyday events that occur in and around Dug's backyard, all through the exciting (and delightfully distorted) eyes of our favorite talking dog. Written and directed by Academy Award® nominee and Emmy® Award winner Bob Peterson and produced by Kim Collins",
      source: "/images/dug-days-originals.jpg",
    },
  ],
  reducers: {},
});

export default originalsSlice.reducer;

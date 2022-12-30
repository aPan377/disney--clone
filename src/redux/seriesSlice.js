import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: [
    {
      id: 1,
      title: "Strange World",
      genre: "Action-Adventure, Animation, Family, Fantasy, Science Fiction",
      description:
        "Walt Disney Animation Studios’ original action-packed comedy adventure, “Strange World,” introduces us to three generations of the legendary Clade family as they attempt to band together and navigate an uncharted, treacherous land beneath their world. The voice cast includes Jake Gyllenhaal as Searcher Clade, a family man who finds himself out of his element on an unpredictable mission; Dennis Quaid as Searcher’s larger-than-life explorer father, Jaeger; Jaboukie Young-White as Searcher’s 16-year-old son, Ethan, who secretly stows away in search of the adventure he’s always wanted; Gabrielle Union as Meridian Clade, an accomplished pilot and Searcher’s partner in all things; and Lucy Liu as Callisto Mal, Avalonia’s fearless leader who spearheads the exploration into the strange world. “Strange World” is helmed by director Don Hall and co-director/writer Qui Nguyen, and produced by Roy Conli",
      source: "/images/strange-world-series.jpg",
    },
    {
      id: 2,
      title: "Ant-Man and the Wasp: Quantumania",
      genre: "Action",
      description:
        "In the film, which officially kicks off phase 5 of the Marvel Cinematic Universe, Super-Hero partners Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) return to continue their adventures as Ant-Man and the Wasp. Together, with Hope’s parents Hank Pym (Michael Douglas) and Janet Van Dyne (Michelle Pfeiffer), the family finds themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought was possible. Jonathan Majors joins the adventure as Kang",
      source: "/images/ant-man-series.jpg",
    },
    {
      id: 3,
      title: "Avatar",
      genre: "Action",
      description:
        "Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure. Directed by James Cameron and produced by Cameron and Jon Landau, the film stars Zoe Saldana, Sam Worthington, Sigourney Weaver, Stephen Lang, Cliff Curtis, Joel David Moore, CCH Pounder, Edie Falco, Jemaine Clement and Kate Winslet",
      source: "/images/avatar-series.jpg",
    },
  ],
  reducers: {},
});

export default seriesSlice.reducer;

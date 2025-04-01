import Image from "next/image";
import Upcoming  from "./_components/Upcoming"
import { options } from "@/constants/api";
import { Section } from "./_components/section";
// export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';


export default function Home() {

  return(
    <div>
      <Section title = "Popular" endpoint={'movie/popular?language=en-US&page=1`'} moreLink="popular?language=en-US&page=1"/>
      <Section title = "Upcoming"  endpoint={'movie/upcoming?language=en-US&page=1`'} moreLink="upcoming?language=en-US&page=1"/>
      <Section title = "Top Rated"  endpoint={'movie/top_rated?language=en-US&page=1`'} moreLink="top_rated?language=en-US&page=1"/>
    </div>
  )
}


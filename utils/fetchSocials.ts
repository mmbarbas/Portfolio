import { Social } from "../typings";
import {groq} from "next-sanity"
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "social"]
`

export const fetchSocials = async() => {
    const socials: Social[] = await sanityClient.fetch(query);

  /*  const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`);
    
    const data = await res.json();
    const socials:Social[] = data.socials;*/

    return socials;
}
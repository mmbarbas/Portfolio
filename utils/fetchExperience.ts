import { Experience } from "../typings";
import {groq} from "next-sanity"
import { sanityClient } from "../sanity";


const query = groq`
    *[_type == "experience"]{
      ...,
      technologies[]->
    }
`

export const fetchExperiences = async() => {
    const experiences: Experience[] = await sanityClient.fetch(query);
    
   /* const data = await res.json();
    const experiences:Experience[] = data.experiences;
*/
    return experiences;
}
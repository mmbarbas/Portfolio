import { Project } from "../typings";
import {groq} from "next-sanity"
import { sanityClient } from "../sanity";

const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`

export const fetchProjects = async() => {
    
    const projects: Project[] = await sanityClient.fetch(query);

   /* const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProjects`);
    
    const data = await res.json();
    const projects:Project[] = data.projects;*/

    return projects;
}
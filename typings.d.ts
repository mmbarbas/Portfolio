interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation:string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}


export interface Technology extends SanityBody {
    _type: "skill";
    image:Image;
    progress: string;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image:Image;
    progress: string;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company:string;
    companyImage:Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: string;
    jobTitle: string;
    points: string[];
    technologies: Techonogy[];
}

export interface Project extends SanityBody {
    title:string;
    _type: "project";
    image:Image;
    dateStarted: string;
    linkToBuild: string;
    summary: string;
    technologies: Techonogy[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
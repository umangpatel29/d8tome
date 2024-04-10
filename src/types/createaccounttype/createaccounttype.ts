export interface CreateAccountType {
    firstname: string;
    lastname: string;
    email: string;
    DOB: string;
    profileImage: string[];
    lookingfor: string;
    show_me: string;
    show_gender: boolean;
    gender: string;
    passion?: string[];
    sexualorientation?: string[];
}
import { Profile } from "../models/Profile.model";

class UserService {
  constructor() {
    console.log("UserService constructor");
  }
  async createProfile(profileData: Profile):Promise<Profile> {
    // create a profile for the user after the user has signed up
    // the profile data will be stored in the profiles table
  try {
      const prof = Profile.create({
        data: {
          id: profileData.id,
          username: profileData.username,
          email: profileData.email,
          role: profileData.role,
        },
      });

      return prof;
  } catch (error) {
        throw error;
  }
  }
}

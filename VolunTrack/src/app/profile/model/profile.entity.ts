// src/app/profile/model/profile.entity.ts

export interface User {
  id?: number;
  username: string;
  password?: string;
  email: string;
  phoneNumber: string;
  plan: string;
  description: string;
  profilePictureUrl: string;
  bannerPictureUrl: string;

  language?: string;
  notifications?: string;
  timezone?: string;
  inscriptions?: string;
}

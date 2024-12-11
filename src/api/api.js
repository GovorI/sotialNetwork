import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "5848fae7-6883-4e5c-a518-a69f3d513c49",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    console.log('status',status)
    return instance.put(`profile/status`, {
      status,
    });
  },
  updatePhotoProfile(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    console.log("updatePhotoProfileAPI" + photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    console.log("apiSaveProfile");
    return instance.put(`profile`, profile);
  },
};

export const auth = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const securityAPI= {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url') 
  }
}

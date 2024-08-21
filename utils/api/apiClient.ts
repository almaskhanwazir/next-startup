import axios, { AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: process.env.Base_URL,
})

export const get = async (
  url: string,
  params?: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.get(url, { params })
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const post = async (
  url: string,
  data: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.post(url, data)
  } catch (error) {
    handleError(error)
    throw error
  }  
}

export const put = async (
  url: string,
  data: object
): Promise<AxiosResponse> => {
  try {
    return await apiClient.put(url, data)
  } catch (error) {
    handleError(error)
    throw error
  }
}

export const deleteRequest = async (url: string): Promise<AxiosResponse> => {
  try {
    return await apiClient.delete(url)
  } catch (error) {
    handleError(error)
    throw error
  }
}

function handleError(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else {
      console.log(error.message)
    }
  } else {
    console.log(error)
  }
}

export const api = {
  Account: {
    User: `/user/`,
    UserDetail: (username: string) => `/user/${username}`,
    toke_create: `/api-token-auth/`,
    verifyLogin: `/verify_login/`,
  },
  Doctor: {
    Doctor: `/dr/`,
    MostFeatured: '/dr_featured_carousel/?page_size=20',
    MostReviewed: '/dr_most_reviewed_carousel/?page_size=20',
  
  },
  DoctorAddress: {
    Address: `/dr_address/`,
    AddressNPI: (npi: string) => `/dr/${npi}`,
    doctor: `/dr/`,
  },
  Bookmarks: {
    BookmarksList: `/bookmarkDoctors/`,
    Create: `/bookmarkDoctors/`,
    BookmarkDetail: (username: string) => `/bookmarkDoctors/${username}`,
    BookmarkDelete: (username: string, npi: number) =>
      `/bookmarkDoctors_delete/${username}/${npi}`,
    BookmarkDoctorAuthUser: `/bookmarkDoctors_detail_authenticated_user/`,
  },
  Review:{
    ReviewSubmit:`/review/`,
  }


}
import axios from "axios";

export const sendMessage = async (email: string) => {
  try {
    
    const result = await axios.post("https://express-email-mail-1.onrender.com/api/messages" , {
      email:email,
    });

    return result.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response);
  }
};

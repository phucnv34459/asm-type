

import instance from ".";
export const menuList = async () => {
  try {
      const { data} = await instance.get("/menus");
      return data;
  } catch (error) {
      return error;
  }
}
import axios from "axios";

export const getUbikeInfo = async () => {
  const { data } = await axios.get('https:/tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json');
  return data;
};

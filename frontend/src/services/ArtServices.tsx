import axios from 'axios';
import { handleError } from '../handlers/ErrorHandler';
import { ArtGet, ArtPost } from '../models/Art';

const api = 'http://localhost:5256/backend/art';

export const artPostAPI = async (
  title: string,
  image: string,
  currentMarketPrice: number,
  condition: string,
  isFramed: boolean,
  height: number,
  width: number,
  styleId: number,
  mediumId: number
) => {
  try {
    const token = localStorage.getItem('token');

    const data = await axios.post<ArtPost>(
      api,
      {
        title: title,
        image: image,
        currentMarketPrice: currentMarketPrice,
        condition: condition,
        isFramed: isFramed,
        height: height,
        width: width,
        styleId: styleId,
        mediumId: mediumId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the authorization header
        },
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const artGetAPI = async () => {
  try {
    const data = await axios.get<ArtGet>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};
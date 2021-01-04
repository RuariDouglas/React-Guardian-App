import axios from "axios";
import { guardianSection } from "../../api";

export const loadSection = (section) => async (dispatch) => {
  try {
    const sectionData = await axios.get(guardianSection(section));
    dispatch({
      type: "FETCH_SECTION",
      payload: { sectionData: sectionData.data.response.results },
    });
  } catch {
    console.log("error");
  }
};

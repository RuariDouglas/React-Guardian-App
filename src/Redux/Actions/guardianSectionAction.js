import axios from "axios";
import { guardianSection, searchAll } from "../../api";

export const loadSection = (section) => async (dispatch) => {
  try {
    const sectionData =
      section === false
        ? await axios.get(searchAll())
        : await axios.get(guardianSection(section));
    dispatch({
      type: "FETCH_SECTION",
      payload: { sectionData: sectionData.data.response.results },
    });
  } catch {
    console.log("error");
  }
};

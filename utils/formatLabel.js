import capitalizeFirstLetter from "./capitalizeFirstLetter";

const formatLabel = (path) => {
    const formattedPath = path.replace(/\./g, " > ").replace(/\[\d+\]/g, "");
    return capitalizeFirstLetter(formattedPath);
  };
export default formatLabel
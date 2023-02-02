// Write a function that converts HEX to RGB. Then Make that function
// auto-dect the formats so that if you enter HEX color format it returns
//  RGB and if you enter RGB color format it returns HEX.

const firstcolor = "rgb(255, 255, 80)";
const secondColor = "#8f801b";

const formatColor = (color) => {
  if (color.includes("rgb")) {
    let rgbToArray = color
      .substring(4, color.length - 1)
      .replace(/ /g, "")
      .split(",");

    let hex = [];

    let redIn = parseInt(rgbToArray[0]).toString(16);
    let greenIn = parseInt(rgbToArray[1]).toString(16);
    let blueIn = parseInt(rgbToArray[2]).toString(16);

    hex = "#" + redIn + greenIn + blueIn;
    return hex;
  } else if (color.includes("#")) {
    let hexValue = color.replace("#", "");
    const r = parseInt(hexValue.substr(0, 2), 16);
    const g = parseInt(hexValue.substr(2, 2), 16);
    const b = parseInt(hexValue.substr(4, 2), 16);

    const rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
  }
};

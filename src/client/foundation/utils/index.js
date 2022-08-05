export const createCloudinaryUrl = (
  path,
  { crop = "fit", h = null, w = null },
) => {
  if (crop && h && w) {
    return `https://res.cloudinary.com/fujishima/image/upload/c_${crop},w_${w},h_${h}/v1659695871/web-speed-hackathon-2022${path}`;
  }
  return `https://res.cloudinary.com/fujishima/image/upload/v1659695871/web-speed-hackathon-2022${path}`;
};

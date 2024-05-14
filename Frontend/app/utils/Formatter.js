export const formatFullName = (user) => {
  return user.firstName + " " + user.lastName;
};

export const formatTimePassed = (date) => {
  const now = new Date().getTime();
  const dateTime = new Date(date).getTime();

  const timeInMinutes = Math.floor(Math.abs(dateTime - now) / (1000 * 60));
  const timeInHours = Math.floor(timeInMinutes / 60);
  const timeInDays = Math.floor(timeInHours / 24);
  const timeInWeeks = Math.floor(timeInDays / 7);

  const days = timeInDays - timeInWeeks * 7;
  const hours = timeInHours - timeInDays * 24;
  const minutes = timeInMinutes - timeInHours * 60;

  if (timeInWeeks > 0) {
    return `${timeInWeeks} sedmica`;
  } else if (days > 0) {
    return `${days} dana`;
  } else {
    if (hours > 0) {
      return `${hours} sati`;
    } else {
      return `${minutes} minuta`;
    }
  }
};

export const formatGoogleDriveImageSrc = (imageUrl) => {
  let id = "";
  let numberOfDashes = 0;
  for (let i = 0; i < imageUrl.length; i++) {
    if (imageUrl[i] == "/") numberOfDashes += 1;
    else if (numberOfDashes == 5) id += imageUrl[i];
  }
  return "https://drive.google.com/thumbnail?id=" + id;
};

export const formatCollegeName = (college) => {
  return college.fullName + ", " + college.city;
};

export const truncateText = (text, length) => {
  return text.substring(0, length) + "...";
};

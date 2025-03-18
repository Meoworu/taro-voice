/**
 * 获取音色头像信息
 * @returns {Array<{src: string, alt: string}>} 返回包含头像src和alt信息的数组
 */
export function getSpeakerAvatars() {
  const avatars:any = [];
  const imgElements = document.querySelectorAll('img[class^="speaker-avatar-"]');

  imgElements.forEach((img) => {
    avatars.push({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt')
    });
  });

  return avatars;
}
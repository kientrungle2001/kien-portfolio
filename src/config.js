export default {
  fullName: 'Lê Trung Kiên',
  jobTitle: 'Full Stack Developer',
  hireMe: 'Thuê tôi',
  exploreMore: 'Tìm hiểu thêm',
  home: 'Trang chủ',
  about: 'Giới thiệu',
  service: 'Dịch vụ',
  portfolio: 'Hồ sơ',
  contact: 'Liên hệ',
  downloadMyCV: 'Tải hồ sơ về tôi',
  mySkills: 'Kỹ năng của tôi',
  skills: [
  {
    name: 'Html/css',
    value: 70
  },
  {
    name: 'JavaScript',
    value: 90
  },
  {
    name: 'PHP',
    value: 90
  },
  {
    name: 'NodeJS',
    value: 80
  },
  {
    name: 'Bootstrap',
    value: 70
  },
],
chunk: function(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];
    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked_arr;
}
};

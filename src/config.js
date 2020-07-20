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
  introductionTitle: 'Những việc tôi làm',
  introductions: [
    {
      title: 'Front-end',
      content: 'Là một nhà phát triển javascript, tôi có kinh nghiệm về các kỹ thuật HTML5 và CSS3 làm việc với jQuery hoặc các khung MVC javascript nâng cao hơn như ReactJS',
      img: 'assets/img/front-end.svg',
      imgCaption: 'Front End Developer'
    },
    {
      title: 'Back-end',
      content: 'Sử dụng các khung php như Zend hoặc tạo mã bespoke, tôi đã viết các dịch vụ hỗ trợ hàng ngàn người dùng, bao gồm API REST, ứng dụng học tập điện tử và hơn thế nữa.',
      img: 'assets/img/back-end.svg',
      imgCaption: 'Back End Developer'
    },
    {
      title: 'Tư vấn',
      content: 'Cùng với việc cung cấp các dịch vụ phát triển, tôi cũng có thể giúp bạn quyết định các lộ trình chiến lược thông qua các dịch vụ tư vấn.',
      img: 'assets/img/consultancy.svg',
      imgCaption: 'Coding'
    },
  ],
  projectsTitle: 'Những dự án mới nhất',
  projects: [
    {
      title: 'Project 1',
      img: 'assets/img/portfolio-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-1.com'
    },
    {
      title: 'Project 2',
      img: 'assets/img/portfolio-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-2.com'
    },
    {
      title: 'Project 3',
      img: 'assets/img/portfolio-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-3.com'
    },
    {
      title: 'Project 4',
      img: 'assets/img/portfolio-4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-4.com'
    },
    {
      title: 'Project 5',
      img: 'assets/img/portfolio-5.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-5.com'
    },
    {
      title: 'Project 6',
      img: 'assets/img/portfolio-6.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo finibus tristique. Maecenas dignissim condimentum sem eu tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet turpis facilisis consectetur quis vel ante. Integer in massa ut nibh ultricies sagittis imperdiet in ante. Nam sed turpis vel ante placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non hendrerit.',
      url: 'https://project-6.com'
    },
  ],
  currentProject: null,
  currentProjectListener: [],
  setCurrentProject: function(currentProject) {
    this.currentProject = currentProject;
    this.currentProjectListener.forEach((listener) => {
      listener(currentProject);
    });
  },
  subscribeCurrentProject: function(listener) {
    if(this.currentProjectListener.indexOf(listener) === -1) {
      this.currentProjectListener.push(listener);
    }
  },
  yearsExperience: 10,
  yearsExperienceTitle: 'Năm kinh nghiệm',
  projectsDelivered: 30,
  projectsDeliveredTitle: 'Dự án đã triển khai',
  nameLabel: 'Họ và tên',
  emailLabel: 'Thư điện tử',
  messageLabel: 'Lời nhắn',
  chunk: function (array, size) {
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

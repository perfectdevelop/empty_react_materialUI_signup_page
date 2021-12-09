// const rhizoApiConfig = {
//     baseUrl: 'http://ec2-15-223-39-9.ca-central-1.compute.amazonaws.com',
//     login: '/rest-auth/login/',
//     signUp: '/rest-auth/registration/',
//     forgotPassword: '/rest-auth/password/reset/',

//     searchMajor: '/search/api/v1/majors/',
//     searchInstitution: '/search/api/v1/institutes/',
//     searchTag: '/search/api/v1/tags/',
//     searchTutor: '/search/api/v1/tutors/',
//     searchCourse: '/search/api/v1/course-search/',

//     updateUser: '/rest-auth/user/',
//     updateStudent: '/student/api/v1/student-profile-details/',
//     updateTutor: '/tutor/api/v1/tutor-profile-details/',
// };

const rhizoMockApiConfig = {
    baseUrl: 'http://127.0.0.1:4000',
    login: '/api/auth/login',
    signUp: '/api/auth/sign-up',
    forgotPassword: '/rest-auth/password/reset/',

    searchMajor: '/search/api/v1/majors/',
    searchInstitution: '/search/api/v1/institutes/',
    searchTag: '/search/api/v1/tags/',
    searchTutor: '/search/api/v1/tutors/',
    searchCourse: '/search/api/v1/course-search/',

    updateUser: '/rest-auth/user/',
    updateStudent: '/student/api/v1/student-profile-details/',
    updateTutor: '/tutor/api/v1/tutor-profile-details/',
};

export const Api = rhizoMockApiConfig;

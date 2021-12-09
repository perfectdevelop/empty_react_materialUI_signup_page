export enum Status {
    APPROVED = 'approved',
    PENDING = 'pending',
    REJECTED = 'rejected',
}

export enum ProfileStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    UNINITIALIZED = 'uninitialized',
}

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

export enum Profile {
    TUTOR = 'tutor',
    STUDENT = 'student',
}

export enum EducationLevel {
    FRESHMAN = 'freshman',
    SOPHOMORE = 'sophomore',
    JUNIOR = 'junior',
    SENIOR = 'senior',
    GRADUATE = 'graduate',
    NOT_SPECIFIED = 'not-specified',
}

export const educationLevelList = [
    { value: 'freshman', label: 'Freshman' },
    { value: 'sophomore', label: 'Sophomore' },
    { value: 'junior', label: 'Junior' },
    { value: 'senior', label: 'Senior' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'not-specified', label: 'Not Specified' },
];

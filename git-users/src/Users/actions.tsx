
type GitUser = {
  id: string,
  name: string,
  login: string,
  avatar: string,
}
type GitUsers = Array<GitUser>;

export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const GET_USER = 'GET_USER';
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';


export const actions = ({
  getUsers: () => ({
    type: GET_USERS,
  }),
  getUsersPending: () => ({
    type: GET_USERS_PENDING,
}),
getUsersSuccess: (users: GitUsers ) => ({
  type: GET_USERS_SUCCESS,
  users
}),
getUsersError: (error: object ) => ({
  type: GET_USERS_PENDING,
  error,
}),
getUser: (login: string) => ({
  type: GET_USER,
  login
}),
getUserPending: () => ({
  type: GET_USER_PENDING,
}),
getUserSuccess: (user: GitUser ) => ({
type: GET_USER_SUCCESS,
user
}),
getUserError: (error: object ) => ({
type: GET_USER_PENDING,
error,
})
});


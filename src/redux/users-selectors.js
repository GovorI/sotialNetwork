export function getUsers(state) {
  return state.usersPage.users;
}

export function getUsersPage(state) {
  return state.usersPage.pageSize;
}

export function getCurrentPage(state) {
  return state.usersPage.currentPage;
}

export function getTotalUserCount(state) {
  return state.usersPage.totalUsersCount;
}

export function getIsFetching(state) {
  return state.usersPage.isFetching;
}

export function getIsFollowingInProgress(state) {
  return state.usersPage.isFollowingInProgress;
}

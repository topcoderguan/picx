import request from '@/utils/request'
import { GithubImageTools_REPO_NAME } from '@/common/constant'

/**
 * 获取 GitHub 用户信息
 * @param token
 */
export const getGitHubUserInfo = (token: string) => {
  return request({
    url: '/user',
    method: 'GET',
    headers: { Authorization: `token ${token}` }
  })
}

export const starredRepo = (repo: string = GithubImageTools_REPO_NAME) => {
  return request({
    url: `/user/starred/${repo}`,
    method: 'PUT',
    data: {},
    noShowErrorMsg: true
  })
}

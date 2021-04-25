import request from './request.js'

export const getProjects = async () => await request.get('/api/project')


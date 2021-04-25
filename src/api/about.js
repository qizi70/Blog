import request from './request.js'

export const getAbout = async () => await request.get('/api/about')

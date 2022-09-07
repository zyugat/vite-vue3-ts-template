// 权限问题后期增加
import { get, post } from '@/utils/axios'
// import axios from 'axios';
enum URL {
  all = '',
}
interface Random {
  random: number
}

// https://api.zyugat.cn/study/dangdang
// https://api.zyugat.cn/study/dangdang?random=2
// 要注意区分，params 和 data 两种参数传递
const getAll = async () => get<any>({ url: URL.all })
const getRandom = async (params: Random) => get<any>({ url: URL.all, params })
export { getAll, getRandom }

import axios from 'axios'

export function AxiosGet(url,params) {
	if(params){
      return axios.get(url,{params:params});
	}
	return axios.get(url);
}


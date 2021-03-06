import {observable, action, useStrict, runInAction, computed} from 'mobx';
import http from '../common/utils/http.js';

useStrict(true);

class HostUser {
    constructor(){
      this.getName();
    }
    @observable user = {};
    @action getName = async () => {
        console.log('我执行一次，我是单例模式');
        const data = await http.get('mock/user.json', {id: '123'});
        runInAction(() => {
              this.user = data;
        });        
    };
    @computed get userId(){
        return this.user.id; 
    };
}

export default new HostUser();
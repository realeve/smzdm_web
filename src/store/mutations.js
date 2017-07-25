// 同步事件

let mutations = {
    setInitStatus(state,val){
        state.inited = val;
    },
    initTyped(state,val){
        state.typeStatus = val;
    }
}

export default mutations
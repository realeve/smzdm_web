// 同步事件

let mutations = {
    setInitStatus(state,val){
        state.inited = val;
    },
    initTyped(state,val){
        state.typeStatus = val;
    },
    setTips(state,val){
        state.tips = val;
    }
}

export default mutations
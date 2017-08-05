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
    },
    setTerminalStatus(state,val){
        state.terminalStatus = val;
    }
}

export default mutations
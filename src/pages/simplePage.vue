<template>
    <div class="section" :class="{split:fill}">
        <arc-line v-if="fill" :fill="fill"></arc-line>
        <div class="wrap">
            <h4>{{title}}</h4>
            <div>
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>
import ArcLine from '../components/ArcLine';

export default {
    components:{
        ArcLine
    },
    props: ['title', 'content','fill']
};
</script>
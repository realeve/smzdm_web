<template>
    <div :class="{slide:!isSection,section:isSection,split:fill,about:isSection}">
        <!-- <arc-line v-if="fill" :fill="fill"></arc-line> -->
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
    props: ['title', 'content','fill','isSection']
};
</script>
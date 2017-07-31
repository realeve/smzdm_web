<template>
    <div :class="{slide:!isSection,section:isSection,split:fill,about:isSection}">
        <!-- <arc-line v-if="fill" :fill="fill"></arc-line> -->
        <div class="wrap">
            <h4>{{title}}</h4>
            <div class="content" v-html="content">
            </div>
        </div>
    </div>
</template>

<script>
// import ArcLine from '../components/ArcLine';

export default {
    // components:{
    //     ArcLine
    // },
    name:'v-page',
    props: ['title', 'content','fill','isSection']
};
</script>
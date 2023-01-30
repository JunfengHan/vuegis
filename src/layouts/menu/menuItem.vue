<template>
    <!-- <span>{{ item.children }}</span> -->
    <template v-if="!item.meta || !item.meta.hidden">
        <template v-if="
            hasOneShowingChild(item.children, item) &&
            (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
            (!item.meta || !item.meta.alwaysShow)
        ">
            <el-menu-item :index="resolvePath(onlyOneChild.name)" :class="{ 'submenu-title-noDropdown': !isNest }"
                @click="clickEvent(onlyOneChild.name, item.name)">
                <template #title>
                    {{ onlyOneChild.meta.title }}
                </template>
            </el-menu-item>
        </template>
        <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
            <!-- popper-append-to-body -->
            <template #title>
                <span v-if="item.meta && item.meta.title">{{
                        item.meta.title
                }}</span>
            </template>

            <menu-item v-for="child in item.children" :key="child.path" :item="child" :is-nest="true"
                :base-path="resolvePath(child.path)" class="nest-menu" />
        </el-sub-menu>
    </template>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import path from 'path-browserify';
import { useRouter } from "vue-router";
import { useRouterPath } from '@/store';

const store = useRouterPath();

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    isNest: {
        type: Boolean,
        required: false
    },
    basePath: {
        type: String,
        required: true
    }
});

const onlyOneChild = ref();

function hasOneShowingChild(children = [] as any, parent: any) {
    if (!children) {
        children = [];
    }
    const showingChildren = children.filter((item: any) => {
        if (item.meta && item.meta.hidden) {
            return false;
        } else {
            // Temp set(will be used if only has one showing child)
            onlyOneChild.value = item;
            return true;
        }
    });

    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
        return true;
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
        return true;
    }

    return false;
}

function resolvePath(routePath: string) {
    return path.resolve(props.basePath, routePath);
}
let router = useRouter();
function clickEvent(onlyOneChildPath: any, name: String) {
    console.log('name:', name);
    store.setActivePath(name);
    router.push(resolvePath(onlyOneChildPath));
}

</script>
<style lang="less" scoped>

</style>